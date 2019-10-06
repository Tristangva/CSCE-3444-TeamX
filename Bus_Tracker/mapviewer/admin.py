from django.contrib import admin
from .models import Bus, Routes, map
from django.contrib.gis.admin import OSMGeoAdmin

# Register your models here.
admin.site.register(Bus)
admin.site.register(Routes),

admin.site.register(map)
class mapAdmin(OSMGeoAdmin):

    default_lon = 33.215079
    default_lat = -97.133103
    default_zoom = 15
    readonly_fields = ('Latitude', 'Longitude')

