from django.shortcuts import render
# from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers, status
from .serializers import ProductSerializer
from .models import Product
from rest_framework import viewsets, permissions
# Create your views here.


# @api_view(['GET'])
# def productsList(request):

#     products = Product.objects.all()
#     serializer  =  ProductSerializer(products, many=True)

#     print('list', serializer.data)

#     return Response(serializer.data, status= status.HTTP_200_OK)

# @api_view(['POST'])
# def productCreate(request):
#     serializer = ProductSerializer(data = request.data)

#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status = status.HTTP_201_CREATED)
#     else:
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


# @api_view(['GET','PUT'])
# def updateProduct(request,pk):
#     product = Product.objects.get(id=pk)
    
#     serializer = ProductSerializer(instance=product)

#     if request.method == 'PUT':
#         serializer = ProductSerializer(instance=product, data = request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status =  status.HTTP_200_OK)
#         else:
#             return Response(serializer.errors, status = status.HTTP_304_NOT_MODIFIED)
#     return Response(serializer.data, status = status.HTTP_200_OK)

# @api_view(['DELETE'])
# def deleteProduct(request, pk):
#     product = Product.objects.get(id=pk)
#     serializer    = ProductSerializer(instance=product)

#     if request.method == 'DELETE':
#         product.delete()
#         return Response('Product Deleted', status = status.HTTP_200_OK)
    
#     return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    _, token = AuthToken.objects.create(user)
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": token
    })

# Get User API
class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user




















class ProductViewset(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ProductSerializer

    def get_queryset(self):
        return self.request.user.products.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        return 







