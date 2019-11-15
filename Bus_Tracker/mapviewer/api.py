from .models import *
from rest_framework import viewsets, permissions
from .serializer import *

#lead viewsets


class BusViewSets(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BusSerializer


class MapViewSet(viewsets.ModelViewSet):
    queryset = map.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = MapSerializer



class RoutesViewSet(viewsets.ModelViewSet):
    queryset = map.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = MapSerializer


