from django.db import models
from authentification.models import Utilisateur

class Activite(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateTimeField()
    nombre_max_participants = models.IntegerField()
    professeur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)

    def __str__(self):
        return self.nom

class Inscription(models.Model):
    eleve = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    activite = models.ForeignKey(Activite, on_delete=models.CASCADE)
    date_inscription = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.eleve.username} - {self.activite.nom}"