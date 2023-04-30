import os
import requests

class KongService():
    def __init__(self):
        self.url = 'http://surftracker-kong-gateway-1:8001/consumers/'
    
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
    
    def create_jwt(self, username):
        url = self.url + username + '/jwt'
        response = requests.post(url)
        if response.status_code == 201:
            return response.json()
        raise Exception('Error creating token in gateway')
    
    def add_custom_id(self, username, custom_id):
        url = self.url + username
        data = {'custom_id' : str(custom_id)}
        response = requests.patch(url, json=data)
        if response.status_code == 200:
            return response.json()
        raise Exception('Error adding custom id in gateway')
    
    def delete_consumer(self, username):
        url = self.url + username
        response = requests.delete(url)
        if response.status_code == 204:
            return response
        raise Exception('Error deleting consumer in gateway')