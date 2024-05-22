from django.db import models

from .base_models import BaseModel


class BlogPost(BaseModel):
    user = models.ForeignKey("users.CustomUser", on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
