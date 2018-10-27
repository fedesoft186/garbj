from rest_framework.decorators import permission_classes
from garbj.models import Usuario
from garbj.models import Premio
from garbj.serializers import UsuarioSerializer
from garbj.serializers import PremioSerializer
from garbj.permissions import IsPostOrIsAuthenticated
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

@permission_classes((IsPostOrIsAuthenticated, ))
class UsuarioList(generics.ListCreateAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('user_id',)

class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class PremioList(generics.ListCreateAPIView):
    serializer_class = PremioSerializer
    queryset = Premio.objects.all()

class PremioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PremioSerializer
    queryset = Premio.objects.all()