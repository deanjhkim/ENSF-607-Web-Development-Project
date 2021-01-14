# Generated by Django 3.1.5 on 2021-01-13 22:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20210113_2210'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='learningoutcome',
            name='description',
        ),
        migrations.AddField(
            model_name='learningoutcome',
            name='number',
            field=models.CharField(default='', max_length=2),
        ),
        migrations.AlterField(
            model_name='learningoutcome',
            name='outcome',
            field=models.CharField(default='', max_length=50),
        ),
    ]
