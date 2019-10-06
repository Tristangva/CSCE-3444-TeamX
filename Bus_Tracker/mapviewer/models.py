from django.contrib.gis.db import models

# Map module
class map(models.Model):
    city = models.CharField(max_length=50, default='Denton, Tx') #city name
    location = models.PointField()

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

# Class for the routes
class Routes(models.Model):
    route_id = models.CharField(primary_key=True, max_length=30)  # route id = key
    name = models.CharField(max_length=30)  # name of route
    color = models.CharField(max_length=30)  # color
    # Days of week
    # time array
    # stops on route

# For some reason migrations mess up with this. Will fix once I got the map centered.
"""class stops(models.Model):
    stop_id = models.IntegerField() #stop id
    stop_name = models.CharField(max_length=50) # stop name
    location = models.PointField() #location"""