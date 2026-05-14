from django.contrib import messages
from django.shortcuts import render, redirect
from .demo_data import ACTIVITES, get_activity
from .forms import ActiviteForm


def _is_logged(request):
    return bool(request.session.get('demo_user'))


def liste_activites(request):
    activites = sorted(ACTIVITES, key=lambda item: item['date'])
    return render(request, 'activites/liste_activites.html', {'activites': activites})


def inscription_activite(request, activite_id):
    if not _is_logged(request):
        return redirect('connexion')

    activite = get_activity(activite_id)
    if not activite:
        messages.error(request, 'Activité introuvable.')
        return redirect('liste_activites')

    inscriptions = request.session.get('demo_inscriptions', [])
    deja_inscrit = int(activite_id) in inscriptions

    if request.method == 'POST':
        if deja_inscrit:
            messages.info(request, 'Tu es déjà inscrit à cette activité.')
        else:
            inscriptions.append(int(activite_id))
            request.session['demo_inscriptions'] = inscriptions
            request.session.modified = True
            messages.success(request, 'Inscription confirmée pour cette session démo.')
        return redirect('suivi')

    return render(request, 'activites/inscription_activite.html', {'activite': activite, 'deja_inscrit': deja_inscrit})


def ajouter_activite(request):
    user = request.session.get('demo_user')
    if not user:
        return redirect('connexion')
    if user.get('role') != 'professeur':
        messages.error(request, 'Connecte-toi en mode professeur pour tester cette page.')
        return redirect('liste_activites')

    if request.method == 'POST':
        form = ActiviteForm(request.POST)
        if form.is_valid():
            messages.success(request, 'Activité simulée. Sur Vercel, cette version garde les données en mode démo.')
            return redirect('liste_activites')
    else:
        form = ActiviteForm()
    return render(request, 'activites/ajouter_activite.html', {'form': form})


def suivi(request):
    if not _is_logged(request):
        return redirect('connexion')

    ids = request.session.get('demo_inscriptions', [])
    inscriptions = [
        {'activite': activity, 'date_inscription': activity['date']}
        for activity in ACTIVITES
        if activity['id'] in ids
    ]
    return render(request, 'activites/suivi.html', {'inscriptions': inscriptions})
