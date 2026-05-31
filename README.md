# 🌌 Projeto Star Wars - Portal Galáctico (Trabalho Acadêmico)

> "Que a Força esteja com este código." Portal web completo e responsivo desenvolvido como projeto prático para a disciplina de Desenvolvimento Web.

---

## 🚀 Sobre o Projeto

Este projeto consiste em um portal de informações imersivo baseado no universo de **Star Wars**. O site foi planejado com uma arquitetura modular de páginas integradas, aplicando padrões modernos de design escuro, tipografia temática e interatividade rica. 

Toda a interface foi desenvolvida focando na melhor experiência do usuário (UX) e em um código limpo, semântico e estruturado.

---

## 🛠️ Tecnologias Utilizadas

O ecossistema do projeto foi construído utilizando tecnologias nativas do front-end, sem dependências de frameworks pesados:

*   **HTML5 Semântico:** Estruturação limpa utilizando tags estruturais (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) garantindo SEO e acessibilidade.
*   **CSS3 Avançado:** 
    *   Arquitetura de Layout com **Flexbox** e **Display Grid**.
    *   Estilização moderna utilizando Variáveis CSS (Custom Properties) para paleta de cores.
    *   Efeitos visuais como `text-shadow` (brilho neon), `filter` dinâmicos em imagens e gradientes sobrepostos.
    *   **Responsividade Fluida:** Media queries calibradas para os breakpoints de tela mais comuns do mercado (480px, 512px, 620px, 720px, 1080px).
*   **JavaScript Vanilla (Puro):** Desenvolvimento de scripts interativos e comportamentais sem dependências externas e com código otimizado.
*   **Font Awesome:** Biblioteca de ícones vetoriais.

---

## 📁 Estrutura de Páginas do Portal

O site é composto por um sistema integrado de páginas interconectadas através do menu de navegação global:

1.  **Home (`index.html`):** Portal de entrada com banner dinâmico e chamada principal.
2.  **Sobre (`sobre.html`):** Contexto histórico da criação da saga por George Lucas e o primeiro filme de 1977. Contém o plugin interativo de **Accordion das Eras Galácticas**.
3.  **Brinquedos (`brinquedos.html`):** Galeria massiva de produtos organizada em 3 categorias em formato de Grid responsivo.
4.  **Colecionáveis (`colecionadores.html`):** Exposição em estilo catálogo de luxo com layout intercalado e história do mercado de colecionáveis.
5.  **Notícias (`noticias.html`):** Portal de imprensa (*HoloNet News*) contendo manchetes em destaque e artigos editoriais aprofundados.
6.  **Filmes (`filmes.html`):** Cronologia cinematográfica dividida por sagas, contendo cards de pôsteres e **players do YouTube embutidos de forma responsiva**.
7.  **Games (`games.html`):** Central de jogos digitais dividida entre clássicos vintage, a era LEGO e mundos abertos com efeitos visuais de Hover Neon.
8.  **Feedback (`feedback.html`):** Canal de comunicação contendo um **Formulário de Transmissão completo** com diversos tipos de inputs.

---

## 🧠 Funcionalidades e Plugins JavaScript

O projeto cumpre rigorosamente os requisitos comportamentais através de scripts nativos integrados em arquivos externos (`.js`):

*   **Menu Hambúrguer Responsivo:** Sistema de navegação mobile dinâmico que manipula classes do DOM para abrir e fechar o menu em dispositivos menores.
*   **Accordion de Abas Otimizado:** Componente de expansão fluida (utilizando cálculo dinâmico de `scrollHeight` via CSS/JS) para listagem das Eras no painel "Sobre".
*   **Validação de Formulário Nativa:** O formulário de Feedback analisa os campos obrigatórios em tempo real ao submeter, impedindo o envio caso haja dados em branco e disparando alertas descritivos na tela do usuário.



---

## 💻 Como Executar o Projeto

1. Faça o download ou clone este repositório em sua máquina local.
2. Certifique-se de manter a estrutura de pastas do projeto (`/assets/css/`, `/assets/js/`, `/assets/img/`).
3. Abra o arquivo `index.html` em qualquer navegador web moderno (Chrome, Edge, Firefox, Safari).
4. Para uma experiência completa de animação nos banners, recomenda-se rolar a página verticalmente.