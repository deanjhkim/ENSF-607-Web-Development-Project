
from rest_framework import serializers

from .models import *


class OutlineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Outline
        fields = '__all__'

class CalendarInformationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CalendarInformation
        fields = '__all__'

class LearningOutcomeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LearningOutcome
        fields = '__all__'

class GraduateAttributeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GraduateAttribute
        fields = '__all__'

class ExaminationsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Examinations
        fields = '__all__'

class FinalGradeDeterminationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FinalGradeDetermination
        fields = '__all__'

class FinalGradeComponentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FinalGradeComponent
        fields = '__all__'