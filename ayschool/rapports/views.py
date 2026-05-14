from django.shortcuts import render

def liste_rapports(request):
    return render(request, 'rapports/liste_rapports.html')
