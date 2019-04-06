from django.shortcuts import render


# имитация главной страницы, где загружается клиентское приложение
def index_view(request, *args, **kwargs):
    return render(request, 'index.html')
