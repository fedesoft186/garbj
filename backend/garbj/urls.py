from django.conf.urls import url
from garbj import views

urlpatterns = [
    url(r'^usuarios/$', views.UsuarioList.as_view()),
    url(r'^usuarios/(?P<pk>[0-9]+)/$', views.UsuarioDetail.as_view()),
    url(r'^premios/$', views.PremioList.as_view()),
    url(r'^premios/(?P<pk>[0-9]+)/$', views.PremioDetail.as_view()),
    url(r'^logros/$', views.LogroList.as_view()),
    url(r'^logros/(?P<pk>[0-9]+)/$', views.LogroDetail.as_view()),
    url(r'^puntos/$', views.PuntoList.as_view()),
    url(r'^puntos/(?P<pk>[0-9]+)/$', views.PuntoDetail.as_view())
]
