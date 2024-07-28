from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    img = models.ImageField(upload_to='category_images/', null=True, blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    img = models.ImageField(upload_to='product_images/', null=True, blank=True)
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=700)
    price = models.DecimalField(max_digits=15, decimal_places=2)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL, related_name='products', default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
