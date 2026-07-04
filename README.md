# 💬 Dev Frases — Gerador de Frases

Aplicação web que gera **frases aleatórias por categoria**. O usuário escolhe entre as categorias disponíveis (**Motivação** e **Bem estar**), clica em **Gerar frase** e recebe uma frase aleatória na tela.

Projeto desenvolvido durante meus **estudos de ReactJS + TypeScript**, praticando os fundamentos da biblioteca em uma aplicação simples e interativa.

## 💡 Como funciona

1. As frases ficam organizadas em um array de categorias, cada uma com sua lista de frases
2. Ao clicar em uma categoria, ela é selecionada e destacada visualmente
3. O botão **Gerar frase** sorteia aleatoriamente (`Math.random`) uma frase da categoria ativa e a exibe na tela

## 📚 Conceitos praticados

- Componentes funcionais e **TSX**
- Gerenciamento de estado com **`useState`**
- Renderização de listas com **`.map()`** e uso de `key`
- Renderização condicional
- Estilização dinâmica (destaque da categoria selecionada via `style` condicional)
- Manipulação de eventos (`onClick`)
- Estilização com CSS

## 🛠️ Tecnologias

- **React 19**
- **TypeScript 5**
- **Vite 7** — build e dev server
- **ESLint** — padronização de código

## ▶️ Como executar

Pré-requisito: Node.js instalado

```bash
# Clone o repositório
git clone https://github.com/luanmvcosta0/react-dev-frases.git
cd react-dev-frases

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

### Outros scripts

```bash
npm run build     # Build de produção
npm run preview   # Visualiza o build de produção
npm run lint      # Roda o ESLint
```

## 📁 Estrutura

```
react-dev-frases/
├── public/
├── src/
│   ├── assets/        # Logo da aplicação
│   ├── App.tsx        # Componente principal (categorias + gerador)
│   ├── App.css
│   ├── main.tsx       # Entry point
│   └── index.css
├── index.html
├── vite.config.ts
└── package.json
```

## 🚀 Possíveis evoluções

- Adicionar novas categorias e frases
- Botão para copiar a frase gerada
- Compartilhamento da frase em redes sociais
- Evitar repetição da mesma frase em sorteios seguidos
