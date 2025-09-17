---
title: Visión General
description: Buenas prácticas para conectarse con seguridad a la API.
---

## 🚀 Introducción

La API permite integrar fácilmente sistemas externos, automatizando procesos y simplificando tus operaciones.
Desarrollada siguiendo los principios REST, nuestra API es intuitiva, fácil de usar, y totalmente compatible con clientes HTTP comunes, sin necesidad de desarrollo especial.

---

La URL base para todas las peticiones es:

::: code-group

```bash [URL Base]
https://api.exemplo.com/v1
```

```javascript [Ejemplo básico]
const baseUrl = 'https://api.exemplo.com/v1';
const headers = {
  'Authorization': 'Basic ' + btoa('usuario:senha'),
  'X-AGILE-CLIENT': 'EXTERNAL_APP',
  'Accept-Version': '2020-02-26'
};

fetch(baseUrl, { headers })
  .then(response => response.json())
  .then(data => console.log(data));
```

```python [Ejemplo básico]
import requests

base_url = 'https://api.exemplo.com/v1'
headers = {
    'Authorization': 'Basic ' + base64.b64encode('usuario:senha'.encode()).decode(),
    'X-AGILE-CLIENT': 'EXTERNAL_APP',
    'Accept-Version': '2020-02-26'
}

response = requests.get(base_url, headers=headers)
data = response.json()
print(data)
```

:::

::: tip Consejo
Nunca hagas pruebas directamente en el entorno de producción.

Crea un entorno específico (sandbox) con usuarios exclusivos para pruebas.

Si necesitas ayuda para configurar, [abre un ticket con el Soporte](https://help.exemplo.com/support/requests/new){target="_blank" rel="noopener"}.
:::

## 📚 Sobre esta documentación

Esta documentación se mantiene en sincronía con la versión más reciente de la API.<br />
Sin embargo, pequeñas diferencias pueden ocurrir si tu instancia está en una versión anterior.
Siempre que sea posible, verifica el encabezado de versión (Accept-Version) o consulta el soporte en caso de dudas.
