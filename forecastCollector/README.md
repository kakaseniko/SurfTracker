# Forecast data collector
## Introduction
The forecast collector is a django service that is responsible for collecting surf weather data periodically.

## Prerequisites
Python ^3.9.12
Django ^4.1.7
Pip ^21.2.4

Install dependencies with:

```
pip install -r requirements.txt

```
## Migrations
Before running the application run the database migrations with:

```
python manage.py makemigrations

```
Then:

```
python manage.py migrate

```
## Run

To run the data collector:

```
python manage.py start_asyncio

```

The service has its own admin panel that can be executed with:

```
python manage.py runserver 

```
