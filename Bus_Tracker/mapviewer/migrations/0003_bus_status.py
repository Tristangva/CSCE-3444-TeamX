# Generated by Django 2.2.5 on 2019-09-20 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mapviewer', '0002_routes'),
    ]

    operations = [
        migrations.AddField(
            model_name='bus',
            name='status',
            field=models.CharField(default='In service', max_length=30),
        ),
    ]