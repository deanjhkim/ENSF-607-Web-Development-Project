from django.db import models

class Outline(models.Model):
    faculty = models.CharField(max_length=4)
    number = models.CharField(max_length=6)
    term = models.CharField(max_length=5)
    section = models.CharField(max_length=3)


    def __str__(self):
        return self.faculty + self.number + self.term + self.section

