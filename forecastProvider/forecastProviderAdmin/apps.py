from django.apps import AppConfig
import threading


class ForecastprovideradminConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "forecastProviderAdmin"
    def ready(self) -> None:
        def start_message_receiver():
            from forecastProvider import message_receiver
            # replace 'queue_name' with the name of the queue you want to listen to
            message_receiver.start()

        # Start the message receiver in a separate thread when the Django app starts up
        thread = threading.Thread(target=start_message_receiver)
        thread.start()
