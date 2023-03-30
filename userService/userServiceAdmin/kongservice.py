import os
import requests

class KongService():
    def __init__(self):
        #url = os.environ.get('KONG_URL')
        self.url = 'http://kong-gateway:8001/consumers/'
    
    def create_consumer(self, username):
        data = {'username': username}
        response = requests.post(self.url, json=data)
        if response.status_code == 201:
            return response.json()
        raise Exception('Error creating consumer in gateway')
    
    def create_basic_auth(self, username, password):
        url = self.url + username + '/basic-auth'
        data = {'username' : username, 'password' : password}
        response = requests.post(url, json=data)
        if response.status_code == 201:
            return response.json()
        raise Exception('Error creating basic auth in gateway')