# Generated by Django 4.1.7 on 2023-03-14 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CustomUser",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                ("skill_level", models.CharField(max_length=50)),
                ("email", models.EmailField(max_length=255, unique=True)),
                ("admin", models.BooleanField(default=False)),
            ],
            options={"abstract": False,},
        ),
    ]
