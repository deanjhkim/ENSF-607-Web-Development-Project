from rest_framework import viewsets

from .serializers import *
from .models import *

class OutlineViewSet(viewsets.ModelViewSet):
    queryset = Outline.objects.all()
    serializer_class = OutlineSerializer

class CalendarInformationViewSet(viewsets.ModelViewSet):
    queryset = CalendarInformation.objects.all()
    serializer_class = CalendarInformationSerializer

class LearningOutcomeViewSet(viewsets.ModelViewSet):
    queryset = LearningOutcome.objects.all()
    serializer_class = LearningOutcomeSerializer

class GraduateAttributeViewSet(viewsets.ModelViewSet):
    queryset = GraduateAttribute.objects.all()
    serializer_class = GraduateAttributeSerializer

class ExaminationsViewSet(viewsets.ModelViewSet):
    queryset = Examinations.objects.all()
    serializer_class = ExaminationsSerializer

class FinalGradeDeterminationViewSet(viewsets.ModelViewSet):
    queryset = FinalGradeDetermination.objects.all()
    serializer_class = FinalGradeDeterminationSerializer

class FinalGradeComponentViewSet(viewsets.ModelViewSet):
    queryset = FinalGradeComponent.objects.all()
    serializer_class = FinalGradeComponentSerializer
