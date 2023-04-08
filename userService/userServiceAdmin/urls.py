from django.urls import path
from .views import UserApiView
from .auth import UserAuthView


urlpatterns = [
    path("user/<int:pk>/", UserApiView.as_view(), name="user"),
    path("user/", UserApiView.as_view(), name="user"),
    path("login/", UserAuthView.as_view(), name="login"),
]
