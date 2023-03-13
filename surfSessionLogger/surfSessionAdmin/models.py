from django.db import models

# Create your models here.
class SurfSession(models.Model):
    user_id = models.IntegerField()
