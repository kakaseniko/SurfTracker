import pika
import json
import os
def send(user_id):
    #host = os.environ.get('RABBIT_HOST')
    #connection = pika.BlockingConnection(pika.ConnectionParameters(host='surftracker-rabbitmq-1'))
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='188.166.135.152'))
    #connection = pika.BlockingConnection(pika.ConnectionParameters(host=host))
    
    channel = connection.channel()
    channel.queue_declare(queue='gdpr')
    json_str = json.dumps(user_id)
    body = json_str.encode('utf-8')
    channel.basic_publish(exchange='', routing_key='gdpr', body=body)
    print(" [x] Sent")
    connection.close()
