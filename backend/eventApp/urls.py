from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from eventApp import views

routers = routers.DefaultRouter()
routers.register(r'events', views.EventView, "events")

urlpatterns = [
    path('api/', include(routers.urls)),
    path('docs/', include_docs_urls(title='Event API',
         description='RESTful API for Event')),
]
