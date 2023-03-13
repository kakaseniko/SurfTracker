from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class ForecastData(models.Model):
    spot = models.ForeignKey('Spot', on_delete=models.SET('Spot'), related_name='spot')
    dateTime = models.DateTimeField()
    waveHeight = models.FloatField()
    wavePeriod = models.FloatField()
    waveDirection = models.FloatField()
    windDirection = models.FloatField()
    windSpeed = models.FloatField()
    tide = models.FloatField()

    def __str__(self):
        return str(self.spot) + " " + str(self.dateTime) + " " + str(self.waveHeight) + " " + str(self.wavePeriod) + " " + str(self.waveDirection) + " " + str(self.windDirection) + " " + str(self.windSpeed) + " " + str(self.tide)
class Spot(models.Model):
    country = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    dataSourceUrl = models.CharField(max_length=100, blank=True)
    def __str__(self):
        return self.country + " " + self.name + " " + str(self.latitude) + " " + str(self.longitude)
