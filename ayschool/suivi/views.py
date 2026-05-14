from django.shortcuts import render

def liste_suivi(request):
    return render(request, 'suivi/liste_suivi.html')
