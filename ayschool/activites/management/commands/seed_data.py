from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import timedelta
from authentification.models import Utilisateur
from activites.models import Activite


class Command(BaseCommand):
    help = 'Create demo users and activities for the portfolio demo.'

    def handle(self, *args, **options):
        professeur, _ = Utilisateur.objects.get_or_create(
            username='prof_demo',
            defaults={'email': 'prof@example.com', 'role': 'professeur'}
        )
        professeur.set_password('demo12345')
        professeur.save()

        eleve, _ = Utilisateur.objects.get_or_create(
            username='eleve_demo',
            defaults={'email': 'eleve@example.com', 'role': 'eleve'}
        )
        eleve.set_password('demo12345')
        eleve.save()

        items = [
            ('Club de robotique', 'Atelier pratique pour apprendre les bases des capteurs, moteurs et prototypes Arduino.', 7, 18),
            ('Débat et prise de parole', 'Séances guidées pour développer confiance, argumentation et communication orale.', 10, 22),
            ('Tournoi de football', 'Compétition amicale entre équipes avec suivi des inscriptions et capacité limitée.', 14, 30),
            ('Atelier design web', 'Introduction aux interfaces modernes, couleurs, mise en page et bonnes pratiques UX.', 18, 16),
            ('Club environnement', 'Actions concrètes autour du recyclage, de la sensibilisation et des projets verts.', 21, 20),
            ('Préparation carrière', 'Activité d’orientation : CV, portfolio, entretien et présentation professionnelle.', 25, 24),
        ]

        for name, description, days, capacity in items:
            Activite.objects.get_or_create(
                nom=name,
                defaults={
                    'description': description,
                    'date': timezone.now() + timedelta(days=days),
                    'nombre_max_participants': capacity,
                    'professeur': professeur,
                }
            )

        self.stdout.write(self.style.SUCCESS('Demo data created. Users: prof_demo/demo12345 and eleve_demo/demo12345'))
