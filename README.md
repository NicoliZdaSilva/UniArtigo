# 🧠 UniArtigo

**UniArtigo** é uma rede social acadêmica desenvolvida com foco em alunos, professores e pesquisadores que desejam **compartilhar seus artigos, projetos e pesquisas** de forma acessível e colaborativa. Inspirado por plataformas como LinkedIn, Instagram, Scielo e ResearchGate, o UniArtigo promove a conexão e o desenvolvimento de conhecimento acadêmico.

---

## 🎯 Objetivo do Projeto

- Permitir o compartilhamento de trabalhos acadêmicos sem necessidade de submissão formal.
- Criar uma rede social centrada no desenvolvimento científico e educacional.
- Facilitar o acesso a pesquisas e promover a colaboração entre estudantes e profissionais.

---

## 🧰 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **Tailwind CSS** (para estilização)
- **JavaScript (Vanilla JS)**
- **Material Design** (como referência de padrão visual)

---

## 👥 Equipe Responsável

- **Cauê Lopes**
- **Nicoli Z. da Silva**
- **Samuel B. Gislon**
- **Thaiane Almeida**

---

## 💻 Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/uniartigo-web.git
   cd uniartigo-web
   ```
2. Instale dependências (caso adicionar Node.js):
   ```bash
   npm install
   ```
3. Se estiver usando uma extensão de servidor local (como Live Server no VS Code), basta abrir o index.html.

4. Caso queira configurar um servidor local simples (sem Node.js), execute:
   ```bash
   python -m http.server
   ```
   E acesse http://localhost:8000.

> **Requisitos:** navegador moderno (Chrome, Firefox, Edge).

---

## 🧰 Ambiente de Desenvolvimento Avançado

Para acelerar seu fluxo de trabalho e garantir código de alta qualidade:

- **Extensões VS Code recomendadas:**
  - _Tailwind CSS IntelliSense_ – inteligência para classes Tailwind
  - _Prettier_ – formatador de código padrão
  - _ESLint_ – identificação e correção de erros de JavaScript
  - _Live Server_ – recarregamento automático da página

- **Formatação automática ao salvar:**
  - Prettier configurado como formatador padrão
  - ESLint corrige erros automaticamente com `"editor.codeActionsOnSave": { "source.fixAll.eslint": "explicit" }`

- **Plugin Prettier + TailwindCSS:**
  - Arquivo `prettier.config.cjs` configurado com `prettier-plugin-tailwindcss` para ordenar classes Tailwind

- **Fluxo de trabalho: lint + format**

- **VS Code (.vscode/settings.json)**
  - Adicionar o seguinte:

    ```json
    {
      "files.associations": {
        "*.css": "tailwindcss"
      },
      "tailwindCSS.includeLanguages": {
        "plaintext": "html"
      },
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true,
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
      }
    }
    ```

---

## 📄 Estrutura Inicial das Telas

- Tela de apresentação
- Tela de cadastro e login
- Tela principal com feed de artigos
- Tela de postagem de novo artigo
- Tela de perfil do usuário
- Tela de visualização de artigo
- Tela de favoritos, pesquisa, seguidores, notificações e comentários

---

## 🔒 Requisitos Técnicos

- Responsivo e compatível com dispositivos móveis
- Acessibilidade: suporte a leitores de tela
- Integração futura com APIs para notificações

---

## 📢 Contribuições

Contribuições são bem-vindas! Siga o fluxo:

1. Crie uma branch para sua tarefa/funcionalidade:

   ```bash
   git checkout -b feat/nome-da-funcionalidade
   ```

2. Faça o commit das suas alterações claros e objetivos:

   ```bash
   git commit -m 'feat: adicionar tela de login'
   ```

3. Faça o push da branch:

   ```bash
   git push orig  in feat/nome-da-funcionalidade
   ```

4. Abra um Pull Request para revisão:
   - **Acesse o repositório no GitHub em seu navegador.**
   - O GitHub geralmente exibe um banner sugerindo:
   - **“Compare & pull request”**
   - Clique nele, ou:
   - Vá até a aba **“Pull requests”** e clique em **“New pull request”**.
   - Selecione a branch de origem (feat/nome-da-funcionalidade) e a branch de destino (develop).
   - Adicione um título e descrição (explique o que mudou).
   - Clique em **“Create pull request”**.

---

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

**Desenvolvido para a Universidade do Estado de Santa Catarina (CEAVI) | Junho de 2025**
