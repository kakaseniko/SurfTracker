from django.urls import path
from .views import UserApiView

urlpatterns = [
    path("user/<int:pk>/", UserApiView.as_view(), name="user"),
    path("user/register/", UserApiView.as_view({'post':'register'}), name="register"),
    path("user/issue_token/", UserApiView.as_view({'post':'issue_token'}), name="issue_token"),
]