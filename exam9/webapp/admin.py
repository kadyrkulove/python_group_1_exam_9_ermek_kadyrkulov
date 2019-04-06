from django.contrib import admin
from webapp.models import RegistrationToken


# Register your models here.

# прописываем, какие поля будут выводиться в модели
# (токен выводится только для чтения и не подлежит изменению, даже из админки)
class RegistrationTokenAdmin(admin.ModelAdmin):
    list_display = ['pk', 'user', 'created_at']
    readonly_fields = ['token']


admin.site.register(RegistrationToken, RegistrationTokenAdmin)
