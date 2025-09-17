---
title: Overview
description: Best practices for securely connecting to the API.
---

## 🚀 Introduction

The API allows you to easily integrate external systems, automating processes and simplifying your operations.
Developed following REST principles, our API is intuitive, easy to use, and fully compatible with common HTTP clients, with no need for special development.

---

The base URL for all requests is:

::: code-group

```bash [Base URL]
https://api.exemplo.com/v1
```

```javascript [Basic example]
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

```python [Basic example]
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

::: tip Tip
Never test directly in the production environment.

Create a specific environment (sandbox) with exclusive users for testing.

If you need help setting up, [open a ticket with Support](https://help.exemplo.com/support/requests/new){target="_blank" rel="noopener"}.
:::

## 📚 About this documentation

This documentation is kept in sync with the latest version of the API.<br />
However, small differences may occur if your instance is on an earlier version.
Whenever possible, check the version header (Accept-Version) or consult support if in doubt.
