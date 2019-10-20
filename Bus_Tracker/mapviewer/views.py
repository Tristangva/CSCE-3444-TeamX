from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import api_view

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import map

from .serializer import MapSerializer



class map_display(viewsets.ModelViewSet):  # display map made from either default location, or current location

    serializer_class = MapSerializer
    queryset = map.objects.all()


