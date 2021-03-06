from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from duodigitos.api.views import router

schema_view = get_schema_view(openapi.Info(title='Duodigitos', default_version='v1'), public=True)

urlpatterns = [
    path("", include(router.urls)),
    path("admin/", admin.site.urls),
    path("swagger/", schema_view.with_ui()),
]