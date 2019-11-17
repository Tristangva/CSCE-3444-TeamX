from rest_framework import serializers
from .models import *


#bus serializer
class BusSerializer(serializers.ModelSerializer):
    class meta:
        model = Bus
        fields = '__all__'  # all fields


class MapSerializer(serializers.ModelSerializer):
        class meta:
            model = map
            fields = ('city', 'location')  # all fields in Map model


class RouteSerializer(serializers.ModelSerializer):
        class meta:
            model = Route
            fields = ('route_id', 'name', 'color') # fields


class StopSerializer(serializers.ModelSerializer):
    class meta:
        model = stop
        fields = ('stop_name', 'latitude', 'longitude')
