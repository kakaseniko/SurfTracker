from django.apps import AppConfig
import threading

class SurfsessionadminConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "surfSessionAdmin"

    def ready(self) -> None:
        def start_message_receiver():
            from surfSessionLogger import receiver
            receiver.start()
        thread = threading.Thread(target=start_message_receiver)
        thread.start()
