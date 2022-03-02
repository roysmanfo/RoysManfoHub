from django.shortcuts import render
from django.http import HttpRequest, HttpResponse 

# Create your views here.
def GeneralIndex(request):
    return render(request,'main/index.html')