# Forecast provider
## Introduction
The surf session logger is a django API that is responsible for handling surf session CRUD operations.

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


