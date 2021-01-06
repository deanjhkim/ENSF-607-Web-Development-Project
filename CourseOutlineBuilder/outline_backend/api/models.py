from django.db import models

class Outline(models.Model):
    faculty = models.CharField(max_length=4)
    number = models.CharField(max_length=6)
    term = models.CharField(max_length=5)
    section = models.CharField(max_length=3)
    date_created = models.CharField(max_length=10)

    def __str__(self):
        return self.faculty + self.number + self.term + self.section

class CalendarInformation(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    hours = models.CharField(max_length=50, null=True)
    credit = models.CharField(max_length=50, null=True)
    calendar_reference = models.CharField(max_length=50, null=True)

class LearningOutcome(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    outcome = models.CharField(max_length=2, null=True)
    description = models.CharField(max_length=50, null=True)

class GraduateAttribute(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    outcome = models.CharField(max_length=2, null=True)
    attribute = models.CharField(max_length=10, null=True)
    level = models.CharField(max_length=10, null=True)

class Examinations(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    text = models.CharField(max_length=100, null=True)

class FinalGradeDetermination(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)

class FinalGradeComponent(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    component = models.CharField(max_length=50, null=True)
    outcomes = models.CharField(max_length=10, null=True)
    weight = models.CharField(max_length=4, null=True)