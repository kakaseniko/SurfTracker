import pika
from surfSessionAdmin.models import SurfSession
import os

def start():
    host = os.environ.get('RABBIT_HOST')
    #connection = pika.BlockingConnection(pika.ConnectionParameters(host='surftracker-rabbitmq-1'))
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=host))
    channel = connection.channel()

    channel.queue_declare(queue='gdpr')

    def callback(ch, method, properties, body):
        SurfSession.objects.filter(user_id=body.decode('utf-8')).delete()

        print(" [x] Received," )

    channel.basic_consume(queue='gdpr', on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()
