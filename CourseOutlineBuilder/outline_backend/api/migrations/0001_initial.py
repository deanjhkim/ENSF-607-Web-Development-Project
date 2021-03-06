# Generated by Django 3.1.5 on 2021-01-15 02:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Outline',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('faculty', models.CharField(blank=True, default='', max_length=100)),
                ('number', models.CharField(blank=True, default='', max_length=100)),
                ('term', models.CharField(blank=True, default='', max_length=100)),
                ('section', models.CharField(blank=True, default='', max_length=100)),
                ('description', models.CharField(blank=True, default='', max_length=50)),
                ('date_created', models.CharField(blank=True, default='', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Timetable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section', models.CharField(blank=True, default='', max_length=50)),
                ('days', models.CharField(blank=True, default='', max_length=50)),
                ('time', models.CharField(blank=True, default='', max_length=50)),
                ('location', models.CharField(blank=True, default='', max_length=50)),
                ('outline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline')),
            ],
        ),
        migrations.CreateModel(
            name='Textbook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, default='', max_length=50)),
                ('author', models.CharField(blank=True, default='', max_length=50)),
                ('year', models.CharField(blank=True, default='', max_length=50)),
                ('publisher', models.CharField(blank=True, default='', max_length=50)),
                ('requirement', models.CharField(blank=True, default='', max_length=50)),
                ('outline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline')),
            ],
        ),
        migrations.CreateModel(
            name='Policy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('policy', models.CharField(blank=True, default='', max_length=50)),
                ('outline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline')),
            ],
        ),
        migrations.CreateModel(
            name='LearningOutcome',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(blank=True, default='', max_length=50)),
                ('outcome', models.CharField(blank=True, default='', max_length=50)),
                ('attribute', models.CharField(blank=True, default='', max_length=50)),
                ('level', models.CharField(blank=True, default='', max_length=50)),
                ('outline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline')),
            ],
        ),
        migrations.CreateModel(
            name='Instructor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section', models.CharField(blank=True, default='', max_length=50)),
                ('first_name', models.CharField(blank=True, default='', max_length=50)),
                ('last_name', models.CharField(blank=True, default='', max_length=50)),
                ('phone', models.CharField(blank=True, default='', max_length=50)),
                ('office', models.CharField(blank=True, default='', max_length=50)),
                ('email', models.CharField(blank=True, default='', max_length=50)),
                ('outline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline')),
            ],
        ),
        migrations.CreateModel(
            name='FinalGradeComponent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('component', models.CharField(blank=True, default='', max_length=50)),
                ('outcomes', models.CharField(blank=True, default='', max_length=50)),
                ('weight', models.CharField(blank=True, default='', max_length=50)),
                ('outline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline')),
            ],
        ),
        migrations.CreateModel(
            name='Examinations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(blank=True, default='', max_length=1000)),
                ('outline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline')),
            ],
        ),
        migrations.CreateModel(
            name='CalendarInformation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, default='', max_length=500)),
                ('hours', models.CharField(blank=True, default='', max_length=50)),
                ('credit', models.CharField(blank=True, default='', max_length=50)),
                ('calendar_reference', models.CharField(blank=True, default='', max_length=50)),
                ('outline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline')),
            ],
        ),
        migrations.CreateModel(
            name='Calculator',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(blank=True, default='', max_length=1000)),
                ('outline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.outline')),
            ],
        ),
    ]
