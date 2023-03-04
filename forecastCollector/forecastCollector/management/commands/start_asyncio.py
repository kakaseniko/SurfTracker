import asyncio
import multiprocessing
from django.core.management.base import BaseCommand
from forecastCollectorApi.models import ForecastData
import time




class Command(BaseCommand):
    help = 'Starts the asyncio script'

    def asyncio_script(self):
        # Define your asyncio script here
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        while True:
            print('Hello from asyncio!')
            ForecastData.objects.create(country="NL", spot_id=2, dateTime="2019-01-01", waveHeight=1.0, wavePeriod=1.0, waveDirection=1.0, windDirection=1.0, windSpeed=1.0, tide=1.0)
            asyncio.run_coroutine_threadsafe(asyncio.sleep(5), loop)
            time.sleep(30)

    def handle(self, *args, **options):
        p = multiprocessing.Process(target=self.asyncio_script)
        p.start()
