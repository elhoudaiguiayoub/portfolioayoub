from django.urls import path
from . import views  # Assure-toi que le fichier views.py existe dans rapports

urlpatterns = [
    path('', views.liste_rapports, name='liste_rapports'),
]
