import pika
from surfSessionAdmin.models import SurfSession

def start():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='surftracker-rabbitmq-1'))
    channel = connection.channel()

    channel.queue_declare(queue='gdpr')

    def callback(ch, method, properties, body):
        SurfSession.objects.filter(user_id=body.decode('utf-8')).delete()

        print(" [x] Received," )

    channel.basic_consume(queue='gdpr', on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()