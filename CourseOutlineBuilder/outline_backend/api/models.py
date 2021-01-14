from django.db import models

class Outline(models.Model):
    faculty = models.CharField(max_length=4)
    number = models.CharField(max_length=6)
    term = models.CharField(max_length=5)
    section = models.CharField(max_length=3)
    description = models.CharField(max_length=50)
    date_created = models.CharField(max_length=10)

    def __str__(self):
        return self.faculty + self.number + self.term + self.section

class CalendarInformation(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    description = models.CharField(max_length=500, default="")
    hours = models.CharField(max_length=50, default="")
    credit = models.CharField(max_length=50, default="")
    calendar_reference = models.CharField(max_length=50, default="")

class LearningOutcome(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    number = models.CharField(max_length=2, default="")
    outcome = models.CharField(max_length=50, default="")
    attribute = models.CharField(max_length=50, default="")
    level = models.CharField(max_length=50, default="")

class Timetable(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    section = models.CharField(max_length=50, default="")
    days = models.CharField(max_length=50, default="")
    time = models.CharField(max_length=50, default="")
    location = models.CharField(max_length=50, default="")

class Instructor(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    section = models.CharField(max_length=50, default="")
    first_name = models.CharField(max_length=50, default="")
    last_name = models.CharField(max_length=50, default="")
    phone = models.CharField(max_length=50, default="")
    office = models.CharField(max_length=50, default="")
    email = models.CharField(max_length=50, default="")

class Examinations(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    text = models.CharField(max_length=1000, default="")

class Calculator(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    text = models.CharField(max_length=1000, default="")

class FinalGradeComponent(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    component = models.CharField(max_length=50, default="")
    outcomes = models.CharField(max_length=10, default="")
    weight = models.CharField(max_length=4, default="")

class Textbook(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, default="")
    author = models.CharField(max_length=50, default="")
    year = models.CharField(max_length=50, default="")
    publisher = models.CharField(max_length=50, default="")
    requirement = models.CharField(max_length=50, default="")

class Policy(models.Model):
    outline = models.ForeignKey(Outline, on_delete=models.CASCADE)
    policy = models.CharField(max_length=50, default="")