from django.urls import path
from . import views
#from django.views.generic import TemplateView

urlpatterns = [
    

#   path('',TemplateView.as_view(template_name='index.html')),
    
    path('api/', views.getData, name="customer-list"),
    path('api/add/', views.addCustomer, name="add_customers"),
    path('api/delete/<str:pk>/', views.deleteCustomer, name ="Delete-Customer"),
    path('api/update/<str:pk>/', views.updateCustomer, name ="Update-Customer"),
    path('api/<str:pk>/', views.singleCustomer, name ="Single-Customer"),
    
    
    
    
]