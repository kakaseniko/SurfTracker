import pika, sys, os
import asyncio
import time


def start():
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    while True:
        connection = pika.BlockingConnection(pika.ConnectionParameters(host='surftracker-rabbitmq-1'))
        channel = connection.channel()
        channel.queue_declare(queue='hello')
        channel.basic_publish(exchange='', routing_key='hello', body='Hello World!')
        print(" [x] Sent 'Hello World!'")
        connection.close()
        #ForecastData.objects.create(spot_id=1, dateTime="2019-01-01", waveHeight=1.0, wavePeriod=1.0, waveDirection=1.0, windDirection=1.0, windSpeed=1.0, tide=1.0)
        asyncio.run_coroutine_threadsafe(asyncio.sleep(5), loop)
        time.sleep(30)