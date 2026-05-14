from django.urls import path
from . import views  # Assure-toi que le fichier views.py existe dans suivi

urlpatterns = [
    path('', views.liste_suivi, name='liste_suivi'),
]
