# Generated by Django 4.2.13 on 2024-07-28 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_remove_product_img_productimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='product_images/'),
        ),
        migrations.DeleteModel(
            name='ProductImage',
        ),
    ]
