from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

def index(request):
    return HttpResponse("Hello, world. You're at the mapviewer index.")