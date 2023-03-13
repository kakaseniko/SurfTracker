from django.shortcuts import render
from rest_framework.views import APIView
from .models import ForecastData
from .serializers import ForecastDataSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class ForecastDataApiView(APIView):
        def get(self, arg):
            forecasts = ForecastData.objects.all()
            serializer = ForecastDataSerializer(forecasts, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)