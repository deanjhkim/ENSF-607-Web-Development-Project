from django.shortcuts import render

from rest_framework import viewsets

from .serializers import OutlineSerializer
from .models import Outline

class OutlineViewSet(viewsets.ModelViewSet):
    queryset = Outline.objects.all()
    serializer_class = OutlineSerializer
