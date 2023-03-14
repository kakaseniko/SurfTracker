from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ("email", "staff", "admin", "skill_level",)
    list_filter = ("email", "staff",  "admin", "skill_level",)
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Permissions", {"fields": ("staff",  "admin", "groups", "user_permissions")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "email", "password1", "password2", "staff", "admin",
                "groups", "user_permissions", "skill_level"
            )}
        ),
    )
    search_fields = ("email", "skill_level",)
    ordering = ("email", "skill_level",)

# Register your models here.
admin.site.register(CustomUser, CustomUserAdmin)
