# Generated by Django 2.2.5 on 2019-09-16 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bus',
            fields=[
                ('id', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('route', models.CharField(max_length=30)),
                ('capacity', models.IntegerField()),
            ],
        ),
    ]
