from django.urls import path
from .views import ForecastDataApiView

urlpatterns = [
    path("forecast/", ForecastDataApiView.as_view(), name="forecast")
]