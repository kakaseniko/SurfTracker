from django.db import models

# Create your models here.
class ForecastData(models.Model):
    country = models.CharField(max_length=2)
    spot = models.CharField(max_length=100)
    dateTime = models.DateTimeField()
    waveHeight = models.FloatField()
    wavePeriod = models.FloatField()
    waveDirection = models.FloatField()
    windDirection = models.FloatField()
    windSpeed = models.FloatField()
    tide = models.FloatField()

    def __str__(self):
        return self.country + " " + self.spot + " " + str(self.dateTime) + " " + str(self.waveHeight) + " " + str(self.wavePeriod) + " " + str(self.waveDirection) + " " + str(self.windDirection) + " " + str(self.windSpeed) + " " + str(self.tide)
