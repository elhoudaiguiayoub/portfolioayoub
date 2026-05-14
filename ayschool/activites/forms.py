from django import forms

class ActiviteForm(forms.Form):
    nom = forms.CharField(label='Nom de l’activité', max_length=120)
    description = forms.CharField(label='Description', widget=forms.Textarea(attrs={'rows': 4}))
    date = forms.DateTimeField(label='Date', required=False, help_text='Démo Vercel : la création est simulée.')
    nombre_max_participants = forms.IntegerField(label='Nombre maximum de participants', min_value=1, max_value=200)
