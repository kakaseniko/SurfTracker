from rest_framework.views import APIView
import os
import requests
import jwt
from django.http import JsonResponse
from rest_framework import status
from .models import CustomUser
from .kongservice import KongService
from rest_framework.views import APIView



class UserAuthView(APIView):
    def get(self, request, *args):
        email = request.headers.get('X-Consumer-Username')
        user = CustomUser.objects.get(email=email)
        kong_service = KongService()
        if user:
            data = kong_service.create_jwt(email)
            secret = data['secret']
            key = data['key']
            token = jwt.encode({"iss": key}, secret, algorithm="HS256")
            return JsonResponse(data = {'token': token, 'id' : user.id}, status = status.HTTP_200_OK)
        return JsonResponse(status = status.HTTP_404_NOT_FOUND)

