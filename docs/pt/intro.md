---
title: Visão Geral
description: Boas práticas para se conectar com segurança à API.
---

## 🚀 Introdução

A API permite integrar facilmente sistemas externos, automatizando processos e simplificando suas operações.
Desenvolvida seguindo os princípios REST, nossa API é intuitiva, fácil de usar, e totalmente compatível com clientes HTTP comuns, sem necessidade de desenvolvimento especial.

---

A URL base para todas as requisições é:

::: code-group

```bash [URL Base]
https://api.exemplo.com/v1
```

```javascript [Exemplo básico]
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

```python [Exemplo básico]
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

::: tip Dica
Nunca faça testes diretamente no ambiente de produção.

Crie um ambiente específico (sandbox) com usuários exclusivos para testes.

Se precisar de ajuda para configurar, [abra um ticket com o Suporte](https://help.exemplo.com/support/requests/new){target="_blank" rel="noopener"}.
:::

## 📚 Sobre esta documentação

Esta documentação é mantida em sincronia com a versão mais recente da API.<br />
No entanto, pequenas diferenças podem ocorrer caso sua instância esteja em uma versão anterior.
Sempre que possível, verifique o cabeçalho de versão (Accept-Version) ou consulte o suporte em caso de dúvidas.
