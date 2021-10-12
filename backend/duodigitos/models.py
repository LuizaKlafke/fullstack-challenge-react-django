from django.db import models

class Duodigitos(models.Model):
    entrada = models.IntegerField()
    tempoExecucao = models.IntegerField()
    duodigito = models.IntegerField()
    
   