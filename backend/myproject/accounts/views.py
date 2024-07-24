# accounts/views.py
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from django.contrib.auth import authenticate

User = get_user_model()

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        return Response({'status': 'Login successful', 'user_id': user.id})

 
   # You'll need to create this serializer

class UserListView(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Adjust the queryset to return users you want to list
        return User.objects.all()
