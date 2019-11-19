from django.contrib.gis.db import models
from polymorphic.models import PolymorphicModel
from django.contrib.postgres.fields import ArrayField
from django.contrib.gis.geos import Point # used with point creation
from django.contrib.auth.models import User


# Map module
class map(models.Model):
    city = models.CharField(max_length=50, default='Denton, Tx') #city name
    location = models.PointField()

    def _str_(self):
        return self.city


# Comment this out after you make a map. Will fix later
#map.objects.create(location=Point(-97.133103, 33.215079))

    # class for bus
class Bus(models.Model):
    id = models.CharField(primary_key=True, max_length=30)  # key
    route = models.CharField(max_length=30)
    capacity = models.IntegerField()
    STATUS_CHOICES = [ # different choices for bus status
        ('In service', 'In service'),
        ('Maintenance', 'Maintenance'),
    ]
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='In service')  # maintenance status
    # if it is being used right now


# For some reason migrations mess up with this. Will fix once I got the map centered.
class stop(models.Model):
    stop_name = models.CharField(max_length=50, default=None)  # stop name
    latitude = models.FloatField(default=33.211073)
    longitude = models.FloatField(default=-97.146241)


# Class for the routes
class Route(models.Model):
    id = models.CharField(primary_key=True, max_length=30, default=None)  # route id = key
    name = models.CharField(max_length=30, default=None)  # name of route
    color = models.CharField(max_length=30, default=None)  # color
    # Days of week
    # time array
    # stops on route
    stps = ArrayField(
        ArrayField(
            models.TextField(max_length=300)  # names of stops
        )
    )



#user model?