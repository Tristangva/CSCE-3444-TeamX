from rest_framework import serializers
from .models import Bus, Routes


#bus serializer
class busSerializer(serializers.ModelSerializer) :
    class meta:
        model = Bus
        fields = '__all__'  #all fields