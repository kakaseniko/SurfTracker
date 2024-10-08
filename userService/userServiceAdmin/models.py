from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import CustomUserManager


# Create your models here.
class CustomUser(AbstractBaseUser, PermissionsMixin):
    skill_level = models.CharField(max_length=50)

    email = models.EmailField(
    max_length=255,
    unique=True,
    )
    admin = models.BooleanField(default=False) # a superuser    
    staff = models.BooleanField(default=False) # a staff user; non super-user


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] # Email & Password are required by default.

    def get_full_name(self):
        # The user is identified by their email address
        return self.email

    def get_short_name(self):
        # The user is identified by their email address
        return self.email

    def __str__(self):
        return self.email + " " + self.skill_level
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_admin(self):
        "Is the user a admin member?"
        return self.admin
    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.staff
    
    objects = CustomUserManager()
