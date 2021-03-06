from django.urls import path, include
from rest_framework import routers
from .views import *
from knox import views as knox_views


router = routers.DefaultRouter()
router.register(r'products', ProductViewset, 'products')
# router.register(r'all-products', allProducts , name='all-products')


urlpatterns = [
    path('api/', include(router.urls) ),
    path('api/all-products', allProducts, name='all-products'),
    path('api/items', getItems, name='items'),
    path('api/orders', getOrders, name='orders'),
    path('api/updateItem', updateItem, name='updateItem'),
    path('api/processOrder', processOrder, name='processOrder'),
    path('api/totalOrders', totalOrders, name='totalOrders'),
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
    
]