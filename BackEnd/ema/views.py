from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.decorators import api_view
from ema.models import Customer
from .serializers import CustomerSerializer




def c_dash(request):
    customer_list = Customer.objects.all()
    return render(request, 'cdash.html',{'customer_list':customer_list}) 
    



# For Getting Data --
@api_view(['GET'])
def getData(request):
    customers = Customer.objects.all()
    serializer = CustomerSerializer (customers, many = True)
    return Response(serializer.data) 

# For Single user Data --
@api_view (['GET'])
def singleCustomer(request,pk):
    customer = Customer.objects.get(id=pk)
    serializer = CustomerSerializer (customer, many=False)
    return Response(serializer.data)



#For Adding --
@api_view(['POST'])
def addCustomer(request):
    serializer = CustomerSerializer(data=request.data)
    if serializer.is_valid():
       serializer.save()
    return Response(serializer.data)



# For Delete -- 
@api_view(['DELETE'])
def deleteCustomer(request,pk):
    customer = Customer.objects.get(id=pk)
    customer.delete()
    return Response('Customer data deleted') 



# For Update  ----
@api_view(['POST'])
def updateCustomer(request,pk):
    customer = Customer.objects.get(id=pk)
    serializer = CustomerSerializer(instance=customer, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
