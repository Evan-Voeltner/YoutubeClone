from django.urls import path, include
from replies import views


urlpatterns = [
    path('id/<int:pk>/', views.replies_update),
    path('/<int:pk>/', views.replies_update),
]