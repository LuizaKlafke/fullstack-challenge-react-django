from rest_framework import  routers, viewsets

from duodigitos.models import Duodigitos
from duodigitos.api.serializers import DuodigitosSerializer

from time import time

def calculaDuodigito(entrada, multiplo=1, inicio=time()):
        
        algarismosDiferentes=[]
        multiplo += 1
        numero = entrada * multiplo

        for i in str(numero):
            if i not in algarismosDiferentes:
                algarismosDiferentes.append(i)
        
        if len(algarismosDiferentes) <= 2:

            fim=time()
            return numero, (fim-inicio)*1000

        else:
            return calculaDuodigito(entrada, multiplo, inicio)      


class DuodigitosViewSet(viewsets.ModelViewSet):

    queryset = Duodigitos.objects.all()
    serializer_class = DuodigitosSerializer

router = routers.SimpleRouter()
router.register("duodigitos", DuodigitosViewSet)