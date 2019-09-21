from .models import Bus, Routes
from rest_framework import viewsets, permissions
from .serializer import busSerializer

#lead viewsets
class busViewsets(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = busSerializer