# products/admin.py
from django.contrib import admin
from .models import Category, Product, Ingredient

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'img')
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'ingredient_list', 'category_name', 'created_at', 'updated_at')
    search_fields = ('name', 'category__name', 'ingredients__name')
    list_filter = ('category',)

    def category_name(self, obj):
        return obj.category.name if obj.category else 'No Category'
    category_name.short_description = 'Category'
    category_name.admin_order_field = 'category__name'

@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)