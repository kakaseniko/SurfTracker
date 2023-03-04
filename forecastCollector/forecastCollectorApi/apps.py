from django.apps import AppConfig


class ForecastcollectorapiConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "forecastCollectorApi"

    def ready(self):
        # Import celery app now that Django is mostly ready.
        # This initializes Celery and autodiscovers tasks
        import forecastCollector.celery
        import forecastCollectorApi.tasks
        

