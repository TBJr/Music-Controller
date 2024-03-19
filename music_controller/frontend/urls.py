from django.urls import path
from .views import index

<<<<<<< Updated upstream
=======
app_name = 'frontend'

>>>>>>> Stashed changes
urlpatterns = [
    path('', index, name=''),
    path('info', index),
    path('join', index),
    path('create', index),
    path('room/<str:roomCode>', index)
<<<<<<< Updated upstream
]
=======
]
>>>>>>> Stashed changes
