from django.contrib import admin
from .models import Bus, Routes, map
from leaflet.admin import LeafletGeoAdmin
from django.contrib.gis.admin import OSMGeoAdmin

# Register your models here.
admin.site.register(Bus)
admin.site.register(Routes),

class mapAdmin(OSMGeoAdmin):

    list_display = ('city', 'location')

    """default_lon = 33.215079
    default_lat = -97.133103
    default_zoom = 15
    readonly_fields = ('Latitude', 'Longitude')"""

admin.site.register(map, mapAdmin)