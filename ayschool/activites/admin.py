from django.contrib import admin
from .models import Activite, Inscription


@admin.register(Activite)
class ActiviteAdmin(admin.ModelAdmin):
    list_display = ('nom', 'date', 'nombre_max_participants', 'professeur')
    search_fields = ('nom', 'description')
    list_filter = ('date',)


@admin.register(Inscription)
class InscriptionAdmin(admin.ModelAdmin):
    list_display = ('eleve', 'activite', 'date_inscription')
    list_filter = ('date_inscription',)
