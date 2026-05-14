from django import forms

ROLE_CHOICES = [
    ('eleve', 'Élève'),
    ('professeur', 'Professeur'),
]

class DemoLoginForm(forms.Form):
    username = forms.CharField(label="Nom d'utilisateur", max_length=80)
    password = forms.CharField(label='Mot de passe', widget=forms.PasswordInput)
    role = forms.ChoiceField(label='Mode démo', choices=ROLE_CHOICES)

class DemoRegistrationForm(forms.Form):
    username = forms.CharField(label="Nom d'utilisateur", max_length=80)
    email = forms.EmailField(label='Email', required=False)
    role = forms.ChoiceField(label='Rôle', choices=ROLE_CHOICES)
    password1 = forms.CharField(label='Mot de passe', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirmer le mot de passe', widget=forms.PasswordInput)

    def clean(self):
        cleaned = super().clean()
        if cleaned.get('password1') != cleaned.get('password2'):
            raise forms.ValidationError('Les mots de passe ne correspondent pas.')
        return cleaned
