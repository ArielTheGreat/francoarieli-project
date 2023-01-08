from django.shortcuts import render

def hello(request):
    return render(request, "index.html", {})

def looks(request):
    return render(request, "looks.html", {})

def contact(request):
    return render(request, "contact.html", {})

def videos(request):
    return render(request, "videos.html", {})

def training(request):
    return render(request, "training.html", {})