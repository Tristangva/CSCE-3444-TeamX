from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from rest_framework import status
from rest_framework.decorators import api_view

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import map

from .serializer import *



class map_display(viewsets.ModelViewSet):  # display map made from either default location, or current location
    serializer_class = MapSerializer
    queryset = map.objects.all()


class route_display(viewsets.ModelViewSet):
    serializer_class = RouteSerializer
    queryset = map.objects.all()


class stop_display(viewsets.ModelViewSet):
    queryset = stop.objects.all()
    serializer_class = StopSerializer
