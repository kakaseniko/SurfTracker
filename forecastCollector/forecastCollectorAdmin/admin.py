from django.contrib import admin
from .models import ForecastData, Spot

# Register your models here.
admin.site.register(ForecastData)
admin.site.register(Spot)