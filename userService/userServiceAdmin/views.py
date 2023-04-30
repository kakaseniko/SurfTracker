from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework. parsers import JSONParser
from .models import CustomUser
from .serializers import userSerializer
import io
from .kongservice import KongService
from django.http import JsonResponse
from django.http import HttpResponse
from .message_sender import send

# Create your views here.
class UserApiView(APIView):
    def get(self, *args, **kwargs):
        try:
            user = CustomUser.objects.get(id=kwargs['pk'])
            serializer= userSerializer(user)
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, headers = {'Accept': 'application/json'})
        except CustomUser.DoesNotExist:
            return HttpResponse(status = status.HTTP_404_NOT_FOUND)
        
    def post(self, request, *args):
        kong_service = KongService()
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        serializer = userSerializer(data = data)
        if serializer.is_valid():
            kong_service.create_consumer(serializer.validated_data['email'])
            kong_service.create_basic_auth(serializer.validated_data['email'], serializer.validated_data['password'])
            user = serializer.save()
            kong_service.add_custom_id(serializer.validated_data['email'], user.id)
            return HttpResponse(status = status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, *args, **kwargs):
        try:
            user = CustomUser.objects.get(id=kwargs['pk'])
            kong_service = KongService()
            kong_service.delete_consumer(user.email)
            user.delete()
            send(kwargs['pk'])
            return HttpResponse(status = status.HTTP_204_NO_CONTENT)
        except CustomUser.DoesNotExist:
            return HttpResponse(status = status.HTTP_404_NOT_FOUND)
    
    
    
    ##TODO: log out, update, delete

            
        


