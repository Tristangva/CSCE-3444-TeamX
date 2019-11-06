# CSCE-3444-TeamX
The project for CSCE 3444 for Group X

Project Members:
* Tristan White
* Jonathan Kleehammer
* Ashley Torres
* Matthewit Dechatech

To run, ensure git and Python3.7+ is installed.

Modules to install
* Django
* djangorestframework
* Markdown
* React
* googlemaps
* geos
* PostGIS
* 

To install the python dependencies, run
`pip install -r requirements.txt`

[Install GDAL](https://gdal.org/)

Note, this step can be hard


Install Javascript Google Maps with
`npm install --save google-map-react`


[Download postgres](https://www.postgresql.org/download/)

Create a server with these credentials:


...'ENGINE': 'django.contrib.gis.db.backends.postgis',

...'NAME' : 'mapviewer',

...'USER' : 'postgres',

...'PASSWORD' : 'groupx',

...'HOST' : 'localhost',

...'PORT' : '5432',

Start the server with command:

`npm run dev && python3 manage.py runserver`

If this command doesn't work, run:

`npm run dev && python manage.py runserver`

Click on the ip address displayed below


admin info:

user name: admin

user email: admin@admin.com

password: groupx




