from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Event

# Ejecutar los Test: python manage.py test eventApp


class EventAPITestCase(APITestCase):
    def setUp(self):
        # Configuración inicial para cada prueba
        # Asume que tienes 'events-list' como nombre de tu ruta en routers
        self.create_url = reverse('events-list')
        Event.objects.create(title="Test Event", description="Test Description",
                             date="2021-01-01T00:00:00Z", location="Test Location")

    def test_create_event(self):
        """
        Prueba la creación de un evento.
        """
        data = {"title": "New Event", "description": "New Description",
                "date": "2021-01-02T00:00:00Z", "location": "New Location"}
        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_event(self):
        """
        Prueba la obtención de un evento.
        """
        event = Event.objects.first()
        response = self.client.get(
            reverse('events-detail', kwargs={'pk': event.id}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], event.title)

    def test_update_event(self):
        """
        Prueba la actualización de un evento.
        """
        event = Event.objects.first()
        data = {"title": "Updated Event"}
        response = self.client.patch(
            reverse('events-detail', kwargs={'pk': event.id}), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], "Updated Event")

    def test_delete_event(self):
        """
        Prueba la eliminación de un evento.
        """
        event = Event.objects.first()
        response = self.client.delete(
            reverse('events-detail', kwargs={'pk': event.id}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
