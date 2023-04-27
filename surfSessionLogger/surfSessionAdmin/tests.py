from django.test import TestCase
from django.urls import reverse
from .models import SurfSession
import json


# Create your tests here.

class SurfSessionApiTests(TestCase):
    
    def test_get_sessions(self):
        headers = {'X-Consumer-Custom-ID': 1}
        response = self.client.get('/surfsession/', headers=headers)
        self.assertEqual(response.status_code, 200)







