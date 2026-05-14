from datetime import datetime, timedelta
from django.utils import timezone

NOW = timezone.now()

ACTIVITES = [
    {
        'id': 1,
        'nom': 'Club de développement web',
        'description': "Atelier pratique pour apprendre à créer des interfaces modernes, structurer un projet et collaborer avec Git.",
        'date': NOW + timedelta(days=3, hours=2),
        'nombre_max_participants': 24,
        'professeur': {'username': 'prof_demo'},
        'total_inscriptions': 12,
    },
    {
        'id': 2,
        'nom': 'Tournoi de football',
        'description': "Compétition amicale organisée entre groupes avec inscription simple, suivi des participants et esprit d'équipe.",
        'date': NOW + timedelta(days=6, hours=4),
        'nombre_max_participants': 30,
        'professeur': {'username': 'coach_samir'},
        'total_inscriptions': 18,
    },
    {
        'id': 3,
        'nom': 'Atelier design UI/UX',
        'description': "Découverte des bases du design d'interface, couleurs, typographie, hiérarchie visuelle et expérience utilisateur.",
        'date': NOW + timedelta(days=10, hours=1),
        'nombre_max_participants': 20,
        'professeur': {'username': 'prof_design'},
        'total_inscriptions': 9,
    },
    {
        'id': 4,
        'nom': 'Hackathon scolaire',
        'description': "Mini-hackathon en équipe pour créer une solution numérique autour de la vie scolaire.",
        'date': NOW + timedelta(days=14, hours=5),
        'nombre_max_participants': 16,
        'professeur': {'username': 'admin_demo'},
        'total_inscriptions': 7,
    },
]


def get_activity(activity_id):
    for activity in ACTIVITES:
        if activity['id'] == int(activity_id):
            return activity
    return None
