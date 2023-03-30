from rest_framework import serializers
from .models import CustomUser

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "skill_level", "email"]
    def create(self, validated_data):
        return CustomUser.objects.create(**validated_data)