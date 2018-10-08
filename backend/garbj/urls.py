from django.conf.urls import url
from garbj import views

urlpatterns = [
    url(r'^garbj/$', views.UsuarioList.as_view()),
    url(r'^garbj/(?P<pk>[0-9]+)/$', views.UsuarioDetail.as_view()),
]
