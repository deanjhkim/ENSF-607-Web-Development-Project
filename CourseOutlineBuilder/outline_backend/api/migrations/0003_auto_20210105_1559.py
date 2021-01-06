# Generated by Django 3.1.4 on 2021-01-05 22:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210105_1507'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calendarinformation',
            name='calendar_reference',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='calendarinformation',
            name='credit',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='calendarinformation',
            name='hours',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='calendarinformation',
            name='outline',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline'),
        ),
        migrations.AlterField(
            model_name='examinations',
            name='outline',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline'),
        ),
        migrations.AlterField(
            model_name='examinations',
            name='text',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='finalgradecomponent',
            name='component',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='finalgradecomponent',
            name='outcomes',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='finalgradecomponent',
            name='outline',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline'),
        ),
        migrations.AlterField(
            model_name='finalgradecomponent',
            name='weight',
            field=models.CharField(max_length=4, null=True),
        ),
        migrations.AlterField(
            model_name='finalgradedetermination',
            name='outline',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline'),
        ),
        migrations.AlterField(
            model_name='graduateattribute',
            name='attribute',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='graduateattribute',
            name='level',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='graduateattribute',
            name='outcome',
            field=models.CharField(max_length=2, null=True),
        ),
        migrations.AlterField(
            model_name='graduateattribute',
            name='outline',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline'),
        ),
        migrations.AlterField(
            model_name='learningoutcome',
            name='description',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='learningoutcome',
            name='outcome',
            field=models.CharField(max_length=2, null=True),
        ),
        migrations.AlterField(
            model_name='learningoutcome',
            name='outline',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline'),
        ),
    ]
