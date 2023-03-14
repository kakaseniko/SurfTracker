from django.db import models

# Create your models here.
class SurfSession(models.Model):
    user_id = models.IntegerField()
    date_time = models.DateTimeField()
    country = models.CharField(max_length=50)
    spot = models.CharField(max_length=50)
    rating = models.IntegerField()

    def __str__(self):
        return str(self.date_time) + " " + self.country + " " + self.spot + " " + str(self.rating)
