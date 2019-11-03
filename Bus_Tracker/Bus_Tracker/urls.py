"""Bus_Tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView
from rest_framework import routers
from mapviewer import views # idk why this is red
from django.conf.urls import url

router = routers.DefaultRouter()
router.register(r'mapviewer', views.map_display, 'mapviewer')

#This is added for the authentication
router.register('notes', NoteViewSet, 'notes')

urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('account/', include('django.contrib.auth.urls')) # to view the accounts

    url(r'^api/', include(endpoints)),
    url(r'^api/auth/', include('knox.urls')),
    url(r'^', TemplateView.as_view(template_name="index.html")),
]

urlpatterns += [
    path('', RedirectView.as_view(url='/mapviewer/', permanent=True)),
]