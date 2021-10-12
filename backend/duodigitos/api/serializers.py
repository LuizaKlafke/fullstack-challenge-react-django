from rest_framework import serializers

from duodigitos.models import Duodigitos

class DuodigitosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Duodigitos
        fields = ["entrada", "tempoExecucao", "duodigito"]
