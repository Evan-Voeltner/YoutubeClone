from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.user_comments),
    path('<str:video_id_str>/', views.get_all_comments),
   
]