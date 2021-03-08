from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import CharField

# Create your models here.





class Product(models.Model):
    name = models.CharField(max_length=150, null=True)    
    price = models.DecimalField(max_digits=9, decimal_places=2)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="products",null=True)
    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False)
    # transaction_id = models.CharField(max_length=200, null=True)

    @property
    def get_cart_total(self):
        orderitems =  self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])
        return total

    @property
    def get_cart_items(self):
        orderitems =  self.orderitem_set.all()
        total = sum([item.quantity for item in orderitems])
        return total


    def __str__(self):
        return f'{self.pk}'

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, blank=True )
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    @property
    def get_total(self):
        total = self.product.price * self.quantity
        return total

    @property
    def get_price(self):
        return self.product.price

    @property
    def get_product_name(self):
        return self.product.name