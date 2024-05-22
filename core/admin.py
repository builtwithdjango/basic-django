from django.contrib import admin

from .models import BlogPost


class BlogPostAdmin(admin.ModelAdmin):
    list_display = ("id", "uuid", "created_at", "updated_at", "title", "content")


admin.site.register(BlogPost, BlogPostAdmin)
