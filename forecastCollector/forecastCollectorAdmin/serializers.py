from rest_framework import serializers
from forecastCollectorAdmin.models import ForecastData

class ForecastDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForecastData
        fields = "__all__"