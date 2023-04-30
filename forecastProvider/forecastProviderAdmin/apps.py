from django.apps import AppConfig
import threading


class ForecastprovideradminConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "forecastProviderAdmin"
    def ready(self) -> None:
        def start_message_receiver():
            from forecastProvider import message_receiver
            message_receiver.start()
        thread = threading.Thread(target=start_message_receiver)
        thread.start()
