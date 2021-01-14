# Generated by Django 3.1.5 on 2021-01-13 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_calendarinformation_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calculator',
            name='text',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='calendarinformation',
            name='calendar_reference',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='calendarinformation',
            name='credit',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='calendarinformation',
            name='description',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='calendarinformation',
            name='hours',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='examinations',
            name='text',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='finalgradecomponent',
            name='component',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='finalgradecomponent',
            name='outcomes',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='finalgradecomponent',
            name='weight',
            field=models.CharField(default='', max_length=4),
        ),
        migrations.AlterField(
            model_name='instructor',
            name='email',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='instructor',
            name='first_name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='instructor',
            name='last_name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='instructor',
            name='office',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='instructor',
            name='phone',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='instructor',
            name='section',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='learningoutcome',
            name='attribute',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='learningoutcome',
            name='description',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='learningoutcome',
            name='level',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='learningoutcome',
            name='outcome',
            field=models.CharField(default='', max_length=2),
        ),
        migrations.AlterField(
            model_name='policy',
            name='policy',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='textbook',
            name='author',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='textbook',
            name='publisher',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='textbook',
            name='requirement',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='textbook',
            name='title',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='textbook',
            name='year',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='timetable',
            name='days',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='timetable',
            name='location',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='timetable',
            name='section',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='timetable',
            name='time',
            field=models.CharField(default='', max_length=50),
        ),
    ]
