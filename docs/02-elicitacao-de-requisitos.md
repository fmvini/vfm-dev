# 🔍 Elicitação de Requisitos — Portfólio Web Pessoal

## 1. Sobre este documento

A elicitação de requisitos é a etapa da Engenharia de Software responsável por **descobrir, extrair e entender** as necessidades reais dos stakeholders de um projeto. Neste caso, como o desenvolvedor é também o solicitante e o usuário administrador do sistema, a elicitação foi conduzida por meio de uma **entrevista estruturada em blocos temáticos**, técnica comum quando se quer evitar perguntas genéricas demais e extrair requisitos precisos por etapas.

## 2. Técnica utilizada

- **Técnica:** Entrevista estruturada (perguntas fechadas de múltipla escolha, aplicadas em rodadas temáticas)
- **Justificativa da técnica:** Por se tratar de um solicitante único e não uma equipe/organização complexa, a entrevista direta é mais eficiente que técnicas como JAD (Joint Application Development) ou grupos focais. As perguntas de múltipla escolha reduzem ambiguidade nas respostas e aceleram a extração de decisões objetivas.
- **Rodadas realizadas:** 4 rodadas, evoluindo do estratégico (objetivo do projeto) para o tático (conteúdo e estrutura) e por fim o operacional (tecnologia, hospedagem, prazo).

## 3. Registro das Perguntas e Respostas

### Rodada 1 — Objetivo e Contexto Geral

| # | Pergunta | Resposta obtida |
|---|---|---|
| 1.1 | Qual é o principal objetivo do portfólio? | Conseguir estágio/primeiro emprego |
| 1.2 | Você já tem projetos prontos para mostrar? | Sim, poucos (1-2) |
| 1.3 | Qual estilo visual você imagina para o site? | Minimalista/clean (foco em conteúdo) |

**Análise:** O objetivo profissional claro (conseguir estágio) direciona todo o tom do site para **conversão e credibilidade**, não apenas estética. A quantidade reduzida de projetos exige que cada um seja muito bem apresentado (contexto, problema, solução, stack, resultado/aprendizado). O estilo minimalista reforça foco em conteúdo, evitando distrações visuais que "escondam" a falta de volume de projetos.

### Rodada 2 — Conteúdo e Estrutura

| # | Pergunta | Resposta obtida |
|---|---|---|
| 2.1 | Quais seções o site vai ter? | Projetos, Habilidades/Tecnologias, Formação acadêmica, Experiência profissional, Contato, Sobre mim |
| 2.2 | Como disponibilizar o currículo? | Botão de download em PDF |
| 2.3 | Preferência técnica de tecnologia? | React ou outro framework JS |

**Análise:** Todas as seções essenciais de um portfólio de conversão profissional foram contempladas — nenhuma seção "supérflua" (como blog) foi solicitada, o que está alinhado ao objetivo de foco e simplicidade. A escolha por React também sinaliza intenção de demonstrar competência com uma tecnologia de mercado valorizada por recrutadores técnicos.

### Rodada 3 — Funcionalidades e Infraestrutura

| # | Pergunta | Resposta obtida |
|---|---|---|
| 3.1 | Como deve funcionar a seção de contato? | Formulário funcional + links diretos (ambos) |
| 3.2 | Onde hospedar o site? | Vercel/Netlify (gratuito) |
| 3.3 | Precisa ser responsivo e ter modo escuro/claro? | Sim, obrigatório (ambos) |

**Análise:** A exigência de formulário funcional implica a necessidade de uma solução de envio de e-mail sem backend próprio (ex.: serviço de terceiros como EmailJS/Formspree ou função serverless). Responsividade e dark/light mode são hoje padrões de mercado esperados em qualquer site profissional, especialmente um portfólio de dev.

### Rodada 4 — Prazo e Qualidade

| # | Pergunta | Resposta obtida |
|---|---|---|
| 4.1 | Qual prazo para concluir o projeto? | Sem prazo definido; intenção de utilizar ferramentas de agentes de IA |
| 4.2 | Incluir acessibilidade e SEO básico? | Sim |

**Análise:** A ausência de prazo fixo, combinada ao uso de agentes de IA, sugere um processo de desenvolvimento iterativo e ágil, sem cerimônias rígidas de prazo — o cronograma (documento 07) foi então desenhado **por fases lógicas**, não por datas fixas. A exigência de acessibilidade e SEO reforça o caráter profissional do projeto e vira requisito não funcional formal.

## 4. Requisitos Implícitos Identificados

Durante a análise das respostas, alguns requisitos não foram perguntados diretamente, mas emergem como **necessários por consequência lógica** das respostas dadas. Esses itens estão marcados como pendentes de validação com o solicitante:

- [ ] Definir se o formulário de contato enviará e-mail via serviço de terceiros gratuito (ex.: EmailJS, Formspree, Web3Forms).
- [ ] Definir se haverá analytics básico (ex.: Google Analytics/Plausible) para acompanhar visitas de recrutadores.
- [ ] Definir se o texto do site será em português, inglês, ou ambos (relevante para alcance internacional/remoto).
- [ ] Confirmar quais dados exatos entram em "Experiência profissional" (mesmo sendo estudante, pode incluir estágios, freelas ou projetos voluntários).
- [ ] Confirmar se há preferência de paleta de cores específica ou se fica a critério do desenvolvimento.
- [ ] Confirmar nome de domínio/subdomínio desejado na Vercel/Netlify.

> 💡 Esses pontos devem ser esclarecidos antes ou durante a fase de design (ver `07-cronograma.md`), e podem ser tratados como uma "Rodada 5" de elicitação, se necessário.

## 5. Conclusão da Elicitação

As respostas obtidas foram suficientes para consolidar:
- O **escopo do projeto** (`01-escopo-do-projeto.md`)
- Os **requisitos funcionais** (`03-requisitos-funcionais.md`)
- Os **requisitos não funcionais** (`04-requisitos-nao-funcionais.md`)
- A **persona de público-alvo** (`05-personas-e-publico-alvo.md`)
- As **decisões de arquitetura e stack** (`06-arquitetura-e-stack.md`)

Este documento deve ser revisitado caso novas informações surjam ao longo do desenvolvimento, sendo atualizado com novas rodadas de perguntas sempre que necessário.
