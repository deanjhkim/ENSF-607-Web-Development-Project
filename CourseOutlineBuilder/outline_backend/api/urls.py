from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'outlines', views.OutlineViewSet)
router.register(r'calendarinformation', views.CalendarInformationViewSet)
router.register(r'learningoutcomes', views.LearningOutcomeViewSet)
router.register(r'graduateattributes', views.GraduateAttributeViewSet)
router.register(r'examinations', views.ExaminationsViewSet)
router.register(r'finalgradedeterminations', views.FinalGradeDeterminationViewSet)
router.register(r'finalgradecomponents', views.FinalGradeComponentViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))
]