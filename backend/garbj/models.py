from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# category_name = serializers.RelatedField(source='category', read_only=True)classMeta:model = Userfields = ('id', 'username', 'password', 'nombre', 'apellido', 'correo', 'fecha_nacimiento', 'perfil')defcreate(self, validated_data, instance=None):user_data = validated_data.pop('user')user = User.objects.create(**user_data)user.set_password(user_data['password'])

class Usuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=200)
    correo = models.CharField(max_length=200)
    fecha_nacimiento = models.DateField(max_length=200)

