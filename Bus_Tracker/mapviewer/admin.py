from django.contrib import admin
from .models import *
from leaflet.admin import LeafletGeoAdmin
from django.contrib.gis.admin import OSMGeoAdmin

# Register your models here.
admin.site.register(Bus)
admin.site.register(Route),

class mapAdmin(OSMGeoAdmin):

    list_display = ('city', 'location')


admin.site.register(map, mapAdmin)
admin.site.register(stop)
