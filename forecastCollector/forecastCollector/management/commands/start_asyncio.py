import asyncio
import multiprocessing
from django.core.management.base import BaseCommand
from forecastCollectorAdmin.models import ForecastData
import time
import pika


class Command(BaseCommand):
    help = 'Starts the asyncio script'

    def asyncio_script(self):
        # Define your asyncio script here
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        while True:
            connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
            channel = connection.channel()
            channel.queue_declare(queue='hello')
            channel.basic_publish(exchange='', routing_key='hello', body='Hello World!')
            print(" [x] Sent 'Hello World!'")
            connection.close()
            #print('Hello from asyncio!')
            #ForecastData.objects.create(spot_id=1, dateTime="2019-01-01", waveHeight=1.0, wavePeriod=1.0, waveDirection=1.0, windDirection=1.0, windSpeed=1.0, tide=1.0)
            asyncio.run_coroutine_threadsafe(asyncio.sleep(5), loop)
            time.sleep(30)

    def handle(self, *args, **options):
        p = multiprocessing.Process(target=self.asyncio_script)
        p.start()
