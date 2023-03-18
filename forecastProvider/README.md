# Forecast provider
## Introduction
The forecast provider is a django API that is responsible for caching the latest forecast data and handling requests from the API Gateway.

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

To run the application:

```
python manage.py runserver 

```

The service has its own admin panel that is available via the '/admin' url.


