from django.shortcuts import render
from rest_framework.views import APIView
from .models import SurfSession
from rest_framework import status
from django.http import JsonResponse
import io
from rest_framework.parsers import JSONParser
from django.http import Http404
from .serializers import SurfSessionSerializer
from django.http import HttpResponse

# Create your views here.
class SurfSessionApiView(APIView):
    def get_object(self, pk):
        try:
            return SurfSession.objects.get(id = pk)
        except SurfSession.DoesNotExist:
            raise Http404
        
    def get(self, request, *args):
        id = request.headers.get('X-Consumer-Custom-ID')
        surf_sessions = SurfSession.objects.filter(user_id = id)
        serializer = SurfSessionSerializer(surf_sessions, many=True)
        return JsonResponse(serializer.data, safe = False, status = status.HTTP_200_OK)
    
    #get filtered
    
    def post(self, request, *args):
        id = request.headers.get('X-Consumer-Custom-ID')
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        serializer = SurfSessionSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user_id = id)
            return JsonResponse(serializer.data, status = status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk, *args):      
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        surf_session = self.get_object(pk)
        serializer = SurfSessionSerializer(surf_session, data=data, partial=True)
        if surf_session.user_id != request.headers.get('X-Consumer-Custom-ID'):
            return HttpResponse(status = status.HTTP_401_UNAUTHORIZED)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, *args):
        surf_session = self.get_object(pk)
        if(surf_session.user_id != request.headers.get('X-Consumer-Custom-ID')):
            return HttpResponse(status = status.HTTP_401_UNAUTHORIZED)
        surf_session.delete()
        response_data = { "success": True}
        return JsonResponse(response_data, status = status.HTTP_200_OK)

