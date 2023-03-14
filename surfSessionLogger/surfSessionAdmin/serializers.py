from rest_framework import serializers
from surfSessionAdmin.models import SurfSession

class SurfSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurfSession
        fields = ["id","date_time", "country", "spot", "rating"]

    def create(self, validated_data):
        return SurfSession.objects.create(**validated_data)