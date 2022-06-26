from operator import itemgetter
from pyexpat import model
from rest_framework import serializers
from ema.models  import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__' 