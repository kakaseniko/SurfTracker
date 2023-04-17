import pika, sys, os
from forecastProviderAdmin.models import ForecastData

def start():
    # connection = pika.BlockingConnection(pika.ConnectionParameters(host='surftracker-rabbitmq-1'))
    # channel = connection.channel()

    # channel.queue_declare(queue='hello')

    def callback(ch, method, properties, body):
        ForecastData.objects.all().delete()
        for data in body: 
            ForecastData.objects.create(spot_id=1, dateTime=data['date'], waveHeight =  data['waveHeight'], wavePeriod = data['wavePeriod'], waveDirection = 0.0, windDirection = 0.0, windSpeed = 0.0, tide = 0.0)
        print(" [x] Received" )

    # channel.basic_consume(queue='hello', on_message_callback=callback, auto_ack=True)

    # print(' [*] Waiting for messages. To exit press CTRL+C')
    # channel.start_consuming()

if __name__ == '__main__':
    try:
        start()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)