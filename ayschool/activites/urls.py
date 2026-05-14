from django.urls import path
from . import views

urlpatterns = [
    path('', views.liste_activites, name='liste_activites'),
    path('inscription/<int:activite_id>/', views.inscription_activite, name='inscription_activite'),
    path('ajouter/', views.ajouter_activite, name='ajouter_activite'),
    path('suivi/', views.suivi, name='suivi'),
]