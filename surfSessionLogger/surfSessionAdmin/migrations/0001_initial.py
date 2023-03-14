# Generated by Django 4.1.7 on 2023-03-14 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="SurfSession",
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
                ("user_id", models.IntegerField()),
                ("date_time", models.DateTimeField()),
                ("country", models.CharField(max_length=50)),
                ("spot", models.CharField(max_length=50)),
                ("rating", models.IntegerField()),
                ("conditions", models.JSONField()),
            ],
        ),
    ]
