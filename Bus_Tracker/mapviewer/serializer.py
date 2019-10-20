from rest_framework import serializers
from .models import Bus, Routes, map


#bus serializer
class BusSerializer(serializers.ModelSerializer):
    class meta:
        model = Bus
        fields = ('city', 'location')  # all fields in Map model


class MapSerializer(serializers.ModelSerializer):
        class meta:
            model = map
            fields = '__all__' #all fields