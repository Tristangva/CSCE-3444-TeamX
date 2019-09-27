from django.urls import path
from rest_framework import routers
from .api import BusViewSets
from . import views


routers = routers.DefaultRouter()
routers.register('api.Bus', BusViewSets, 'Bus')

urlpatterns = routers.urls

urlpatterns += [
    path('', views.index, name='index'),
]
  #homepage

  #map view