from rest_framework import serializers
from .models import *


#bus serializer
class BusSerializer(serializers.ModelSerializer):
    class meta:
        model = Bus
        fields = '__all__'  # all fields


class MapSerializer(serializers.ModelSerializer):
        class Meta:
            model = map
            fields = ('city', 'location')  # all fields in Map model


class RouteSerializer(serializers.ModelSerializer):
        class Meta:
            model = Route
            fields = ('route_id', 'name', 'color', 'stps')  # fields


class StopSerializer(serializers.ModelSerializer):
    class Meta:
        model = stop
        fields = ('stop_name', 'latitude', 'longitude')
