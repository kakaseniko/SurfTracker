from rest_framework import serializers
from .models import CustomUser

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "password", "skill_level", "email", "admin", "staff", "is_superuser"]
    def create(self, validated_data):
        return CustomUser.objects.create(**validated_data)