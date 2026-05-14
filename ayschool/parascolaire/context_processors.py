def demo_user(request):
    user = request.session.get('demo_user')
    return {
        'demo_user': user,
        'is_demo_authenticated': bool(user),
        'demo_role': user.get('role') if user else None,
        'demo_username': user.get('username') if user else None,
    }
