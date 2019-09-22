from .models import Bus, Routes
from rest_framework import viewsets, permissions
from .serializer import BusSerializer

#lead viewsets


class BusViewSets(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BusSerializer
