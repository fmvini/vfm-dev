# 🛠️ Requisitos Não Funcionais (RNF) — Portfólio Web Pessoal

Os Requisitos Não Funcionais descrevem **como o sistema deve se comportar** — qualidades, restrições e atributos técnicos, independentemente da funcionalidade específica.

Organizados segundo categorias inspiradas no modelo de qualidade **ISO/IEC 25010**, adaptado para um projeto de portfólio front-end.

## 1. Usabilidade

| ID | Requisito | Descrição |
|---|---|---|
| RNF01 | Design minimalista e limpo | A interface deve seguir um estilo visual minimalista, priorizando espaço em branco, tipografia legível e hierarquia visual clara, evitando elementos decorativos desnecessários. |
| RNF02 | Navegação intuitiva | Um usuário deve conseguir encontrar qualquer seção do site em no máximo 2 cliques/interações a partir da página inicial. |
| RNF03 | Consistência visual | Cores, tipografia, espaçamentos e componentes devem seguir um design system consistente em todas as seções. |

## 2. Responsividade

| ID | Requisito | Descrição |
|---|---|---|
| RNF04 | Compatibilidade com dispositivos móveis | O site deve se adaptar corretamente a telas a partir de 320px de largura (smartphones) até resoluções acima de 1920px (desktops grandes). |
| RNF05 | Abordagem mobile-first | O desenvolvimento do CSS/layout deve priorizar a experiência mobile como base, expandindo progressivamente para telas maiores. |
| RNF06 | Testes em múltiplos breakpoints | O site deve ser testado visualmente em ao menos 3 larguras de referência: 375px (mobile), 768px (tablet) e 1440px (desktop). |

## 3. Acessibilidade (a11y)

| ID | Requisito | Descrição |
|---|---|---|
| RNF07 | Contraste de cores adequado | Textos e elementos interativos devem manter contraste mínimo de 4.5:1 (texto normal) e 3:1 (texto grande), conforme WCAG 2.1 nível AA, em ambos os temas (claro e escuro). |
| RNF08 | Navegação por teclado | Todos os elementos interativos (links, botões, formulário, toggle de tema) devem ser acessíveis e operáveis via teclado (Tab, Enter, Espaço), com foco visível. |
| RNF09 | Compatibilidade com leitores de tela | O HTML deve usar elementos semânticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) e atributos ARIA quando necessário, garantindo leitura correta por leitores de tela (ex.: NVDA, VoiceOver). |
| RNF10 | Textos alternativos em imagens | Todas as imagens (foto de perfil, thumbnails de projetos, ícones informativos) devem possuir atributo `alt` descritivo. |
| RNF11 | Hierarquia correta de headings | O documento deve seguir uma hierarquia lógica de títulos (um único `<h1>`, seguido de `<h2>`, `<h3>` conforme a estrutura), sem pular níveis. |

## 4. SEO (Otimização para Motores de Busca)

| ID | Requisito | Descrição |
|---|---|---|
| RNF12 | Meta tags essenciais | O site deve conter `<title>` único e descritivo, `<meta name="description">` e `<meta name="viewport">` configurados corretamente. |
| RNF13 | Open Graph e redes sociais | O site deve conter meta tags Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) para exibição correta ao ser compartilhado. |
| RNF14 | URLs semânticas | Caso existam múltiplas rotas, as URLs devem ser legíveis e descritivas (ex.: `/projetos`, `/contato`). |
| RNF15 | Sitemap e robots.txt | O site deve disponibilizar um `sitemap.xml` básico e um `robots.txt` permitindo indexação pelos motores de busca. |

## 5. Performance

| ID | Requisito | Descrição |
|---|---|---|
| RNF16 | Tempo de carregamento | A página inicial deve carregar em até 3 segundos em conexão 4G padrão (métrica de referência: Lighthouse Performance Score ≥ 85). |
| RNF17 | Otimização de imagens | Imagens devem ser comprimidas e servidas em formatos modernos (WebP/AVIF quando possível), com lazy loading para imagens fora da viewport inicial. |
| RNF18 | Minificação de assets | Arquivos CSS/JS devem ser minificados e otimizados no processo de build (via ferramenta do próprio framework, ex.: Vite/Next.js). |

## 6. Compatibilidade

| ID | Requisito | Descrição |
|---|---|---|
| RNF19 | Suporte a navegadores modernos | O site deve funcionar corretamente nas últimas duas versões estáveis de Chrome, Firefox, Safari e Edge. |
| RNF20 | Degradação graciosa | Funcionalidades não essenciais (ex.: animações) não devem quebrar a experiência caso o navegador não as suporte totalmente. |

## 7. Manutenibilidade

| ID | Requisito | Descrição |
|---|---|---|
| RNF21 | Código organizado em componentes | O código React deve ser estruturado em componentes reutilizáveis e de responsabilidade única (Single Responsibility). |
| RNF22 | Versionamento de código | Todo o histórico de desenvolvimento deve ser versionado via Git, com commits descritivos, hospedado publicamente no GitHub. |
| RNF23 | Documentação do código | O projeto deve conter um `README.md` técnico (separado desta documentação de requisitos) explicando como instalar, rodar e contribuir com o projeto localmente. |

## 8. Segurança

| ID | Requisito | Descrição |
|---|---|---|
| RNF24 | Proteção básica do formulário | O formulário de contato deve possuir proteção contra spam/bots (ex.: honeypot field ou reCAPTCHA gratuito). |
| RNF25 | Ausência de dados sensíveis expostos | Nenhuma chave de API privada ou dado sensível deve ser exposto no código-fonte do front-end (uso de variáveis de ambiente quando aplicável). |

## 9. Disponibilidade e Hospedagem

| ID | Requisito | Descrição |
|---|---|---|
| RNF26 | Hospedagem gratuita e estável | O site deve ser hospedado em plataforma gratuita com alta disponibilidade (Vercel ou Netlify), com deploy automatizado a partir do repositório Git. |
| RNF27 | HTTPS obrigatório | O site deve ser servido exclusivamente via HTTPS (certificado SSL automático, padrão das plataformas escolhidas). |

## Matriz de Verificação (sugestão de ferramentas)

| Categoria | Ferramenta sugerida para validação |
|---|---|
| Performance/SEO/Acessibilidade | Google Lighthouse / PageSpeed Insights |
| Acessibilidade detalhada | axe DevTools, WAVE |
| Responsividade | DevTools do navegador (modo responsivo), BrowserStack (opcional) |
| Contraste de cores | WebAIM Contrast Checker |
| Validação de HTML semântico | W3C Markup Validator |
