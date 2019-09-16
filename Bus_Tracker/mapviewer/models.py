from django.db import models


class Bus(models.Model):
    id = models.CharField(primary_key=True, max_length=30)
    route = models.CharField(max_length=30)
    capacity = models.IntegerField()


class Routes(models.Model):
    route_id = models.CharField(primary_key=True, max_length=30)  # route id = key
    name = models.CharField(max_length=30)  # name of route
    color = models.CharField(max_length=30)  # color
    # Days of week
    # time array