# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
EXPOSE 8005
RUN python manage.py migrate
RUN echo "from userServiceAdmin.models import CustomUser; CustomUser.objects.create_superuser('admin', 'admin')" | python manage.py shell
CMD python manage.py runserver 0.0.0.0:8005
