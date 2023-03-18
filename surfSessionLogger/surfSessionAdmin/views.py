from django.shortcuts import render
from rest_framework.views import APIView
from .models import SurfSession
from rest_framework import status
from rest_framework.response import Response
import io
from rest_framework.parsers import JSONParser
from django.http import Http404
from .serializers import SurfSessionSerializer

# Create your views here.
class SurfSessionApiView(APIView):
    def get_object(self, pk):
        try:
            return SurfSession.objects.get(id = pk)
        except SurfSession.DoesNotExist:
            raise Http404
        
    def get(self, *args):
        surf_sessions = SurfSession.objects.filter(user_id = 1)                      #change to auth user
        serializer = SurfSessionSerializer(surf_sessions, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
    #get filtered
    
    def post(self, request, *args):
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        serializer = SurfSessionSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user_id = 1)                                             #change to auth user (request.user)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk, *args):      
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        surf_session = self.get_object(pk)
        serializer = SurfSessionSerializer(surf_session, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, *args):
        surf_session = self.get_object(pk)
        surf_session.delete()
        response_data = { "success": True}
        return Response(response_data, status = status.HTTP_200_OK)

