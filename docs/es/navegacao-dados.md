---
title: Navegación de Datos
---

## 🔗 HATEOAS

Utilizamos el patrón HATEOAS para indicar acciones o recursos relacionados en respuestas JSON:

Ejemplo práctico:

```json
{
  "id": 123,
  "_link": "https://api.exemplo.com/v1/chain/123"
}
```

- Utiliza siempre la URL indicada en `_link` para acceder a recursos relacionados.
- Las URLs pueden cambiar en el futuro, pero garantizamos siempre la retrocompatibilidad del recurso retornado.

---

## 📑 Paginación

Los resultados grandes se paginan. Envía parámetros como `page` (página actual) y `size` (tamaño de la página).

Ejemplo de URL con paginación:

```json
https://api.exemplo.com/v1/environments/{environmentId}/resource?page=2&size=20
```

---

## 🔄 Sincronización de bases

::: warning
La API no está indicada para sincronizaciones en tiempo real o a gran escala. Para este tipo de
operación, utiliza el servicio dedicado **Data Integration**.

En caso de dudas o para contratar, [abre un ticket con el Soporte](https://help.exemplo.com/support/requests/new){target="_blank" rel="noopener"}.
:::
