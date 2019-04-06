from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
import uuid
from django.utils.timezone import now

class RegistrationToken(models.Model):
    token = models.UUIDField(default=uuid.uuid4)
    created_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def is_expired(self):
        delta = now() - self.created_at
        delta_hours = delta.total_seconds() / 3600
        return delta_hours > settings.TOKEN_EXPIRATION_HOURS

    def __str__(self):
        return "%s" % self.token


class SoftDeleteManager(models.Manager):
    def active(self):
        return self.filter(is_deleted=False)

    def deleted(self):
        return self.filter(is_deleted=True)

class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название')
    description = models.TextField(max_length=2000, null=True, blank=True, verbose_name='Описание')
    is_deleted = models.BooleanField(default=False)
    objects = SoftDeleteManager()

    def str(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Product(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название')
    description = models.TextField(max_length=2000, null=True, blank=True, verbose_name='Описание')
    date = models.DateField(verbose_name='Дата')
    category = models.ManyToManyField(Category, blank=True, related_name="products", verbose_name='Категория')
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name='Цена')
    is_deleted = models.BooleanField(default=False)
    objects = SoftDeleteManager()

    def str(self):
       return self.name


class ProductPhoto(models.Model):
    product = models.ForeignKey(Product, on_delete=models.PROTECT, related_name="photos", verbose_name="Товар")
    photo = models.ImageField(upload_to='posters', null=True, blank=True, verbose_name='Фото')
    is_deleted = models.BooleanField(default=False)
    objects = SoftDeleteManager()

    class Meta:
        verbose_name_plural = 'Photos'


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT, blank=False, null=False, related_name="orders",
                             verbose_name="Пользователь")
    products = models.ManyToManyField(Product, related_name="orders", verbose_name="Товары")
    phone = models.CharField(max_length=20, verbose_name='Телефон')
    address = models.CharField(max_length=40, verbose_name='Адрес')
    comment = models.TextField(max_length=4000, null=True, blank=True, verbose_name='Комментарий')
    date = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def str(self):
        return self.phone