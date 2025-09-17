# Template de Documentação de API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-green.svg)](https://vuejs.org/)
[![VitePress](https://img.shields.io/badge/VitePress-1.0-blue.svg)](https://vitepress.dev/)

Um template moderno e profissional de documentação de API construído com VitePress, Vue 3 e Scalar. Este starter fornece tudo que você precisa para criar documentação de API bonita e interativa com suporte multi-idiomas e a melhor experiência de desenvolvedor.

## Início Rápido

Coloque sua documentação de API funcionando em minutos.

### Pré-requisitos

- **Node.js** (>=18.0.0)
- **pnpm** (>=8.15.5) - recomendado para performance otimizada

### Instalação

```bash
# Clone o repositório
git clone https://github.com/rafactx/api-docs-starter.git
cd api-docs-starter

# Instale as dependências
pnpm install
```

### Desenvolvimento

Inicie o servidor de desenvolvimento com hot-reloading:

```bash
pnpm run dev
```

Visite [`http://localhost:5173`](http://localhost:5173) para ver sua documentação.

### Build de Produção

Gere uma versão estática para deploy:

```bash
pnpm run build
```

Visualize o build de produção localmente:

```bash
pnpm run preview
```

## Estrutura do Projeto

```plaintext
.
├── docs/                              # Documentação VitePress
│   ├── .vitepress/                    # Configuração e tema do VitePress
│   │   ├── components/                # Componentes Vue personalizados
│   │   │   ├── ApiCard.vue           # Cards de funcionalidades da API
│   │   │   ├── HeroSection.vue       # Hero da página inicial
│   │   │   ├── ScalarApi.vue         # Referência interativa da API
│   │   │   └── SpotlightBackground.vue # Fundo animado
│   │   ├── theme/                     # Estilos globais e arquivos de tema
│   │   │   ├── fonts.css            # Carregamento e configuração de fontes
│   │   │   ├── style.css            # Estilos globais
│   │   │   ├── sidebar.css          # Personalização da sidebar
│   │   │   ├── api-docs-responsive.css # Otimizações mobile
│   │   │   └── theme.css            # Paleta de cores e variáveis
│   │   ├── config.ts                 # Configuração principal do VitePress
│   │   └── index.ts                  # Ponto de entrada do tema
│   ├── public/                       # Recursos estáticos
│   │   ├── openapi.json             # Especificação OpenAPI (Inglês)
│   │   ├── openapi-pt-br.json        # Especificação OpenAPI (Português)
│   │   ├── openapi-es.json          # Especificação OpenAPI (Espanhol)
│   │   ├── openapi-fr.json          # Especificação OpenAPI (Francês)
│   │   ├── logo-light.svg           # Logo do tema claro
│   │   └── logo-dark.svg            # Logo do tema escuro
│   ├── en/                           # Conteúdo em inglês
│   ├── es/                           # Conteúdo em espanhol
│   ├── fr/                           # Conteúdo em francês
│   ├── pt/                           # Conteúdo em português
│   └── index.md                      # Redirecionamento por idioma
├── .github/                          # Templates e workflows do GitHub
├── .gitignore                        # Exclusões do Git
├── LICENSE                           # Licença MIT
├── CHANGELOG.md                     # Histórico de versões e mudanças
├── CODE_OF_CONDUCT.md               # Diretrizes da comunidade
├── CONTRIBUTING.md                  # Diretrizes de contribuição
├── SECURITY.md                      # Política de segurança
├── package.json                      # Dependências e scripts
├── tsconfig.json                     # Configuração TypeScript
└── vite.config.ts                    # Configuração de build do Vite
```

## Principais Funcionalidades

### Design Moderno
- **UI inspirada na Apple** com estética limpa e profissional
- **Tema claro/escuro** com alternância perfeita
- **Design responsivo** otimizado para todos os dispositivos
- **Animações suaves** e micro-interações

### Suporte Multi-idiomas
- **4 idiomas**: Inglês, Português, Espanhol, Francês
- **Detecção automática de idioma** baseada nas preferências do navegador
- **Seletor de idioma** com indicadores de bandeira
- **Especificações OpenAPI localizadas** para cada idioma

### Referência Interativa da API
- **Integração Scalar** para testes interativos da API
- **Teste de endpoints ao vivo** diretamente na documentação
- **Exemplos de código** em múltiplas linguagens de programação
- **Documentação abrangente de schemas**

### Performance Otimizada
- **Code splitting** para carregamento otimizado
- **Lazy loading** para componentes e imagens
- **Builds otimizados** com tree shaking
- **Progressive Web App** pronto

### Experiência do Desenvolvedor
- **TypeScript** para segurança de tipos
- **Hot module replacement** para desenvolvimento rápido
- **ESLint + Prettier** para qualidade do código
- **Ferramentas abrangentes** prontas para uso

## Guia de Personalização

### Marca e Cores

Atualize as cores do tema em `docs/.vitepress/theme/theme.css`:

```css
:root {
  /* Atualize essas variáveis com as cores da sua marca */
  --vp-c-brand: #3b82f6;
  --vp-c-brand-light: #60a5fa;
  --vp-c-brand-dark: #2563eb;
}
```

### Logo e Recursos

Substitua os logos padrão em `docs/public/`:
- `logo-light.svg` - Logo do tema claro
- `logo-dark.svg` - Logo do tema escuro

### Especificação OpenAPI

Personalize a especificação da API em `docs/public/openapi.json`:
1. Atualize a seção `info` com os detalhes da sua API
2. Adicione seus endpoints e schemas da API
3. Traduza para outros idiomas se necessário

### Organização de Conteúdo

Adicione suas páginas de documentação nas respectivas pastas de idioma:
- `docs/en/` - Documentação em inglês
- `docs/pt/` - Documentação em português
- `docs/es/` - Documentação em espanhol
- `docs/fr/` - Documentação em francês

### Navegação

Atualize a sidebar e navegação em `docs/.vitepress/config.ts`:

```typescript
sidebar: [
  {
    text: 'Guia da API',
    items: [
      { text: '🚀 Introdução', link: '/pt/intro' },
      { text: '🔐 Autenticação', link: '/pt/authentication' },
      // Adicione suas páginas aqui
    ]
  }
]
```

## Deploy

### Hospedagem Estática

A saída do build é estática e pode ser implantada em qualquer serviço de hospedagem estática:

```bash
# Build para produção
pnpm run build

# Os arquivos estáticos estão em docs/.vitepress/dist
```

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Defina o comando de build como `pnpm run build`
3. Defina o diretório de saída como `docs/.vitepress/dist`

### Outras Plataformas

- **Netlify**: Comando de build `pnpm run build`, Diretório de publicação `docs/.vitepress/dist`
- **GitHub Pages**: Use o branch `gh-pages`
- **AWS S3**: Faça upload da pasta `docs/.vitepress/dist`

## Contribuindo

Aceitamos contribuições! Veja nossas [Diretrizes de Contribuição](CONTRIBUTING.md) para detalhes.

### Fluxo de Desenvolvimento

1. Faça fork do repositório
2. Crie um branch de feature: `git checkout -b feature/amazing-feature`
3. Faça suas mudanças
4. Execute verificações de qualidade: `pnpm run lint && pnpm run format`
5. Faça commit das suas mudanças: `git commit -m 'feat: add amazing feature'`
6. Faça push para o branch: `git push origin feature/amazing-feature`
7. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Agradecimentos

- [VitePress](https://vitepress.dev/) - Gerador de Site Estático
- [Vue.js](https://vuejs.org/) - Framework JavaScript Progressivo
- [Scalar](https://scalar.com/) - Referência Interativa de API
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS Utility-First

## Suporte

- 📧 **Email**: rafactx@icloud.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/rafactx/api-docs-starter/issues)
- 💬 **Discussões**: [GitHub Discussions](https://github.com/rafactx/api-docs-starter/discussions)

---

Feito com carinho por [rafactx](https://github.com/rafactx) e colaboradores

