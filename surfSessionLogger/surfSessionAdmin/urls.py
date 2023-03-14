from django.urls import path
from .views import SurfSessionApiView

urlpatterns = [
    path("surfsession/", SurfSessionApiView.as_view(), name="surfsession"),
    path("surfsession/<int:pk>/", SurfSessionApiView.as_view(), name="surfsession"),
]