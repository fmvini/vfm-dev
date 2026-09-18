# ⚙️ Requisitos Funcionais (RF) — Portfólio Web Pessoal

Os Requisitos Funcionais descrevem **o que o sistema deve fazer** — as funcionalidades e comportamentos esperados, sob a ótica do usuário.

**Legenda de prioridade (MoSCoW):**
- 🔴 **Must have** (essencial, sem isso o projeto não cumpre seu objetivo)
- 🟡 **Should have** (importante, mas não bloqueia o lançamento)
- 🟢 **Could have** (desejável, pode ficar para uma iteração futura)

| ID | Requisito | Descrição detalhada | Prioridade |
|---|---|---|---|
| RF01 | Exibir seção "Sobre mim" | O sistema deve exibir uma seção com foto, nome, título profissional (ex.: "Desenvolvedor Front-end \| Estudante de ADS") e um texto de apresentação pessoal/profissional. | 🔴 |
| RF02 | Exibir seção "Projetos" | O sistema deve listar os projetos do desenvolvedor em formato de cards, contendo: nome do projeto, imagem/thumbnail, descrição curta, tecnologias utilizadas, link para o repositório (GitHub) e link para demo ao vivo (quando disponível). | 🔴 |
| RF03 | Exibir seção "Habilidades/Tecnologias" | O sistema deve exibir de forma visual (ícones, badges ou barras) as linguagens, frameworks, ferramentas e tecnologias que o desenvolvedor domina ou está aprendendo. | 🔴 |
| RF04 | Exibir seção "Formação acadêmica" | O sistema deve exibir informações sobre o curso de Análise e Desenvolvimento de Sistemas (instituição, período, status de conclusão) e outras formações relevantes (cursos, certificações). | 🔴 |
| RF05 | Exibir seção "Experiência profissional" | O sistema deve exibir experiências profissionais, estágios, freelas ou projetos voluntários relevantes, com período, empresa/projeto e principais atividades/resultados. | 🔴 |
| RF06 | Exibir seção "Contato" | O sistema deve exibir uma seção com múltiplos canais de contato disponíveis. | 🔴 |
| RF07 | Formulário de contato funcional | O sistema deve fornecer um formulário com campos (nome, e-mail, mensagem) que envie a mensagem para o e-mail do desenvolvedor através de serviço de terceiros ou função serverless, sem exigir backend próprio. | 🔴 |
| RF08 | Validação do formulário de contato | O sistema deve validar os campos do formulário (campos obrigatórios preenchidos, formato de e-mail válido) antes do envio, exibindo mensagens de erro claras. | 🔴 |
| RF09 | Feedback de envio do formulário | O sistema deve informar visualmente ao usuário se a mensagem foi enviada com sucesso ou se ocorreu um erro. | 🔴 |
| RF10 | Links diretos de contato | O sistema deve disponibilizar links diretos e clicáveis para e-mail (mailto), LinkedIn, GitHub e WhatsApp. | 🔴 |
| RF11 | Download de currículo em PDF | O sistema deve fornecer um botão visível que permita o download direto do currículo do desenvolvedor em formato PDF. | 🔴 |
| RF12 | Alternância de tema claro/escuro | O sistema deve permitir que o usuário alterne manualmente entre modo claro e modo escuro, por meio de um botão/switch visível e acessível em todas as páginas/seções. | 🔴 |
| RF13 | Persistência da preferência de tema | O sistema deve lembrar a preferência de tema (claro/escuro) do usuário entre visitas, utilizando armazenamento local do navegador. | 🟡 |
| RF14 | Navegação entre seções | O sistema deve fornecer um menu de navegação (fixo ou não) que permita ao usuário ir diretamente a cada seção do site (âncoras/scroll suave). | 🔴 |
| RF15 | Links externos de projetos | Ao clicar em um projeto, o sistema deve abrir o link do repositório e/ou da demo em uma nova aba, sem sair da página do portfólio. | 🟡 |
| RF16 | Rodapé com informações de contato/redes | O sistema deve exibir um rodapé com links de redes sociais e ano de copyright. | 🟡 |
| RF17 | Indicador visual de seção ativa | Durante a navegação, o sistema deve destacar visualmente no menu qual seção está sendo visualizada no momento (scrollspy). | 🟢 |
| RF18 | Animações de entrada de conteúdo | O sistema pode exibir animações leves de entrada (fade-in, slide) ao rolar a página, desde que não prejudiquem performance ou acessibilidade. | 🟢 |
| RF19 | Meta tags para compartilhamento (Open Graph) | O sistema deve gerar preview adequado (título, descrição, imagem) quando o link do portfólio for compartilhado em redes sociais/WhatsApp/LinkedIn. | 🟡 |
| RF20 | Página/estado de erro 404 | O sistema deve exibir uma página amigável de "não encontrado" caso o usuário acesse uma rota inexistente (caso o site utilize múltiplas rotas). | 🟢 |

## Requisitos Funcionais em aberto (pendentes de definição com o solicitante)

Estes itens dependem das respostas pendentes identificadas em `02-elicitacao-de-requisitos.md`, seção 4:

| ID | Requisito proposto | Depende de |
|---|---|---|
| RF21 | Contador/analytics de visitas ao portfólio | Definição sobre uso de ferramenta de analytics |
| RF22 | Alternância de idioma (PT/EN) | Definição sobre necessidade de site multilíngue |

## Rastreabilidade

Cada requisito funcional listado aqui deve ser rastreável até:
1. A pergunta/resposta de origem em `02-elicitacao-de-requisitos.md`;
2. O componente de código que o implementa (a ser mapeado durante o desenvolvimento, ex.: em um arquivo `COMPONENTS.md` ou nos próprios commits/PRs);
3. Um critério de aceite testável (ex.: "RF07 é considerado atendido quando um e-mail de teste enviado pelo formulário chega à caixa de entrada do desenvolvedor em até 1 minuto").
