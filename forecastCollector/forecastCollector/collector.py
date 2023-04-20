import pika, sys, os
import asyncio
import time
import pandas as pd
from datetime import datetime
from forecastCollectorAdmin.models import ForecastData
from io import StringIO
import json

def start():
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    while True:
        connection = pika.BlockingConnection(pika.ConnectionParameters(host='surftracker-rabbitmq-1'))
        channel = connection.channel()
        channel.queue_declare(queue='hello')
        dataset = get_wave_data()
        io = StringIO(dataset)
        dataset = json.load(io)
        for data in dataset:
            ForecastData.objects.update_or_create(spot_id=1, dateTime=data['date'], waveHeight =  data['waveHeight'], wavePeriod = data['wavePeriod'], waveDirection = 0.0, windDirection = 0.0, windSpeed = 0.0, tide = 0.0)
        json_str = json.dumps(dataset)
        body = json_str.encode('utf-8')
        channel.basic_publish(exchange='', routing_key='hello', body=body)
        print(" [x] Sent 'Data!'")
        connection.close()
        asyncio.run_coroutine_threadsafe(asyncio.sleep(5), loop)
        time.sleep(3600)

def get_wave_data():
    url = "https://waterberichtgeving.rws.nl/wbviewer/maak_grafiek.php?loc=KUST_28&set=wigo&nummer=7&format=csv"
    df = pd.read_csv(url, sep=';', decimal=',', 
                     names=['date', 'wavePeriod', 'waveHeight', 'SWAN_swellHeight'], 
                     usecols=['date', 'wavePeriod', 'waveHeight'], 
                     parse_dates=['date'], skiprows=1)
    today = datetime.today().strftime('%Y-%m-%d')
    df = df.query('date > @today')
    df = df.drop(df.tail(1).index)
    df['date'] = pd.to_datetime(df.date, format='%Y-%m-%d %H:%M')
    df['wavePeriod'] = df['wavePeriod'].astype(float) / 10.0
    df['wavePeriod'] = df['wavePeriod'].astype(int)
    df['waveHeight'] = df['waveHeight'].astype(float).apply(lambda x: x / 100.0).round(1)
    df['date'] = df['date'].dt.strftime('%Y-%m-%d %H:%M')
    return df.to_json(orient='records')

    