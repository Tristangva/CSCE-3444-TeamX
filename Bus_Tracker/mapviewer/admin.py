from django.contrib import admin
from .models import Bus, Routes, map
from leaflet.admin import LeafletGeoAdmin
from django.contrib.gis.admin import OSMGeoAdmin

# Register your models here.
admin.site.register(Bus)
admin.site.register(Routes),

class mapAdmin(OSMGeoAdmin):

    list_display = ('city', 'location')


admin.site.register(map, mapAdmin)