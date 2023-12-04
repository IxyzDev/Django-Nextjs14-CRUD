from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Event

import time

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

    def test_create_event_with_missing_optional_fields(self):
        """
        Prueba la creación de un evento sin algunos campos opcionales.
        """
        data = {"title": "Event Without Optional Fields",
                "date": "2021-01-03T00:00:00Z"}
        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        # Puedes agregar más aserciones aquí para verificar los campos omitidos

    def test_create_event_with_large_data(self):
        """
        Prueba la creación de un evento con datos que exceden los límites de tamaño.
        """
        large_title = 'a' * 300  # Asumiendo que el límite es menor
        data = {"title": large_title, "description": "Large Data Test",
                "date": "2021-01-03T00:00:00Z", "location": "Large Location"}
        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_event_with_invalid_date_format(self):
        """
        Prueba la creación de un evento con un formato de fecha inválido.
        """
        data = {"title": "Invalid Date Format", "description": "Invalid Date",
                "date": "2021-01-32T00:00:00Z", "location": "Invalid Location"}
        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_nonexistent_endpoint(self):
        """
        Prueba el acceso a un endpoint que no existe.
        """
        response = self.client.get('/nonexistent-endpoint/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_response_time(self):
        """
        Prueba el tiempo de respuesta para una solicitud específica.
        """
        start_time = time.time()
        response = self.client.get(reverse('events-list'))
        end_time = time.time()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # por ejemplo, menos de 0.5 segundos
        self.assertTrue(end_time - start_time < 0.5)
