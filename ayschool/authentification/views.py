from django.contrib import messages
from django.shortcuts import render, redirect
from .forms import DemoLoginForm, DemoRegistrationForm


def _is_logged(request):
    return bool(request.session.get('demo_user'))


def accueil(request):
    return render(request, 'authentification/accueil.html')


def connexion(request):
    if _is_logged(request):
        return redirect('liste_activites')

    if request.method == 'POST':
        form = DemoLoginForm(request.POST)
        if form.is_valid():
            request.session['demo_user'] = {
                'username': form.cleaned_data['username'] or 'demo_user',
                'role': form.cleaned_data['role'],
            }
            request.session.setdefault('demo_inscriptions', [])
            messages.success(request, 'Connexion démo réussie. Aucune base de données n’est nécessaire sur Vercel.')
            return redirect('liste_activites')
    else:
        form = DemoLoginForm(initial={'username': 'eleve_demo', 'role': 'eleve'})
    return render(request, 'authentification/connexion.html', {'form': form})


def inscription(request):
    if _is_logged(request):
        return redirect('liste_activites')

    if request.method == 'POST':
        form = DemoRegistrationForm(request.POST)
        if form.is_valid():
            request.session['demo_user'] = {
                'username': form.cleaned_data['username'],
                'role': form.cleaned_data['role'],
            }
            request.session['demo_inscriptions'] = []
            messages.success(request, 'Compte démo créé pour cette session.')
            return redirect('liste_activites')
    else:
        form = DemoRegistrationForm()
    return render(request, 'authentification/inscription.html', {'form': form})


def profil(request):
    user = request.session.get('demo_user')
    if not user:
        return redirect('connexion')
    return render(request, 'authentification/profil.html', {
        'username': user['username'],
        'role': user['role'],
    })


def deconnexion(request):
    request.session.flush()
    messages.info(request, 'Déconnexion réussie.')
    return redirect('accueil')
