# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
EXPOSE 8008
RUN python manage.py makemigrations & \
    sleep 5
RUN python manage.py migrate --run-syncdb & \
    sleep 5
RUN echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@admin.com', 'admin')" | python manage.py shell & \
    sleep 5
CMD python manage.py runserver 0.0.0.0:8008

    
#CMD python manage.py makemigrations && \
#    python manage.py migrate & \
#    sleep 5 && \
#    (echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@admin.com', 'admin')" | python manage.py shell) & \
#    python manage.py runserver 0.0.0.0:8008
