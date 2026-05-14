from django.contrib.auth.models import AbstractUser
from django.db import models

class Utilisateur(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Administrateur'),
        ('professeur', 'Professeur'),
        ('eleve', 'Élève'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='eleve')

    def __str__(self):
        return f"{self.username} ({self.role})"