
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers, status
from .serializers import OrderItemSerializer, ProductSerializer, OrderSerializer
from .models import Product ,Order, OrderItem
from rest_framework import viewsets, permissions
import json
# Create your views here.


@api_view(['GET'])
def allProducts(request):

    userId =request.user.id
    products = Product.objects.exclude(owner=userId)
    serializer  =  ProductSerializer(products, many=True)


    print('list', serializer.data)

    return Response(serializer.data, status= status.HTTP_200_OK)



@api_view(['GET'])
def getItems(request):

  if request.user.is_authenticated:
    user = request.user

    # orders = Order.objects.all()
    order, created  =Order.objects.get_or_create(user=user, complete=False)
    items = order.orderitem_set.all()

    print('request.user', request.user.id)
    print('items', items)

    serializer = OrderItemSerializer(items,  many=True)
    
    return Response(serializer.data, status=status.HTTP_200_OK)
  else:
    return Response([],status=status.HTTP_204_NO_CONTENT)

    
@api_view(['GET'])
def getOrders(request):

  if request.user.is_authenticated:
    user = request.user

    # orders = Order.objects.all()
    order, created  =Order.objects.get_or_create(user=user, complete=False)
    items = order.orderitem_set.all()

    print('request.user', request.user.id)
    print('items', items)

    serializer = OrderSerializer(order)
    return Response(serializer.data, status=status.HTTP_200_OK)
  else:
    return Response([],status=status.HTTP_204_NO_CONTENT)


  
@api_view(['GET', 'POST'])
def updateItem(request):
    
    if request.method == 'GET':
      return Response('Item was added', status= status.HTTP_201_CREATED )

    if request.method == 'POST':

      d1 = json.dumps(request.data)
      data = json.loads(d1) 
      print('data', data)
      productId = data['ProductId']
      action = data['action']
      print('action',action)
      print('productId', productId)

      user = request.user
      product = Product.objects.get(id=productId)
      order, created = Order.objects.get_or_create(user=user, complete=False)
      orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)

      if action == 'add':
        orderItem.quantity = (orderItem.quantity + 1)
      elif action == 'remove':
        orderItem.quantity = (orderItem.quantity - 1)
      
      
      orderItem.save()
      if orderItem.quantity <= 0:
        orderItem.delete()

      return Response('Item was added')
      


@api_view(['GET', 'POST'])
def processOrder(request):

  if request.method == 'POST':
    d1 = json.dumps(request.data)
    data = json.loads(d1) 

    print('data', data)
    user = request.user
    order , created = Order.objects.get_or_create(user=user, complete=False)
    total = data['get_cart_total']

    if total == order.get_cart_total:
      order.complete = True
    order.save()

  return Response('Order Completed')



@api_view(['GET'])
def totalOrders(request):

  userId =request.user.id
  orders = Order.objects.filter(user=userId)
  serializer  =  OrderSerializer(orders, many=True)

  return Response(serializer.data, status= status.HTTP_200_OK)



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

#============================================Register=============================================
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

#======================================Product===========================================================



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







