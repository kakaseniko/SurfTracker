from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework. parsers import JSONParser
from .models import CustomUser
from .serializers import userSerializer
import io
import os
import requests
import jwt
from rest_framework.decorators import action
from .kongservice import KongService

# Create your views here.
class UserApiView(APIView):
    def get(self, *args, **kwargs):
        try:
            user = CustomUser.objects.get(id=kwargs['pk'])
            serializer= userSerializer(user)
            return Response(data = serializer.data, status = status.HTTP_200_OK)
        except CustomUser.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
    def post(self, request, *args):
        kong_service = KongService()
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        serializer = userSerializer(data = data)
        if serializer.is_valid():
            kong_service.create_consumer(serializer.validated_data['email'])
            kong_service.create_basic_auth(serializer.validated_data['email'], serializer.validated_data['password'])
            serializer.save()
            return Response(status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def issue_token(self, request, *args):
        email = request.headers.get('X-Consumer-Username')
        user = CustomUser.objects.get(email=email)
        if user:
            url = os.environ.get('KONG_URL' + 'consumers/' + user.username + '/jwt')
            headers = {'Content-Type': 'application/x-www-form-urlencoded'}
            response = requests.post(url, headers=headers)
            if response.status_code == 201:
                data = response.json()
                secret = data['secret']
                key = data['key']
                token = jwt.encode({"iss": key}, secret, algorithm="HS256")
                return Response(data = {'token': token, 'id' : user.id}, status = status.HTTP_200_OK)
            return Response(status = status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status = status.HTTP_404_NOT_FOUND)
    
    ##TODO: log out, update, delete

            
        


