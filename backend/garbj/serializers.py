from garbj.models import Usuario
from garbj.models import Premio
from django.contrib.auth.models import User
from rest_framework import serializers

class UsuarioSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True,source="user.username")
    password = serializers.CharField(write_only=True,source="user.password")
    nombre = serializers.CharField(required=False)
    apellido = serializers.CharField(required=False)
    correo = serializers.CharField(required=False)
    fecha_nacimiento = serializers.DateField(required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'nombre', 'apellido','correo', 'fecha_nacimiento')
    def create(self, validated_data, instance=None):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        user.set_password(user_data['password'])
        user.save()
        Usuario.objects.update_or_create(user=user,**validated_data)
        usuario = Usuario.objects.get(user=user)
        return usuario

class PremioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Premio
        fields = ('nombre','descripcion','valor')
          
class PuntoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Punto
        fields = ('puntos','fecha')
          