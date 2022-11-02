from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from comments.models import Comment
from django.shortcuts import get_object_or_404
from .models import Reply
from .serializers import ReplySerializer


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def replies_update(request, pk):
    if request.method == 'GET':
        replies = Reply.objects.filter(comment = pk)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            comment = get_object_or_404(Comment, pk=pk)
            serializer.save(user=request.user, comment = comment)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)