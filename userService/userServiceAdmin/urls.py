from django.urls import path
from .views import UserApiView
from rest_framework import routers


urlpatterns = [
    path("user/<int:pk>/", UserApiView.as_view(), name="user"),
    path("user/", UserApiView.as_view(), name="user"),
   # path("user/register/", UserApiView.register, name="register"),
    #path("user/issue_token/", UserApiView.as_view({'post':'issue_token'}), name="issue_token"),
]