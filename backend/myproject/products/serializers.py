# serializers.py
from rest_framework import serializers
from .models import Product, Category, Ingredient

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'img']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    ingredients = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'img', 'name', 'description', 'ingredients', 'price', 'category', 'created_at', 'updated_at']

    def get_ingredients(self, obj):
        return [ingredient.name for ingredient in obj.ingredients.all()]
