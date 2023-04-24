from django.test import TestCase
from django.urls import reverse





# Create your tests here.

class SurfSessionApiTests(TestCase):
    
    def test_get_sessions(self):
        response = self.client.get('/surfsession/')
        self.assertEqual(response.status_code, 200)
    
    def test_post_sessions(self):
        url ='/surfsession/'
        response = self.client.post(url, {
            "date_time": "2023-01-01T11:05",
            "country": "NL",
            "spot": "Scheveningen",
            "rating": 3
            }, format='json')

        self.assertEqual(response.status_code, 201)
    
    def test_patch_session(self):
        response = self.client.patch('/surfsession/1/', {
            "date_time": "2023-01-01T11:05",
            "country": "NL",
            "spot": "Scheveningen",
            "rating": 1
            }, format='json')
        self.assertEqual(response.status_code, 200)







