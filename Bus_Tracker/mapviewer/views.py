from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import api_view

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import map

from .serializer import MapSerializer


@api_view(['GET', 'POST'])
def map_display(request):  # display map made from either default location, or current location

    if request.method == 'GET':

        serializer = MapSerializer(context={'request': request} ,many=True)
