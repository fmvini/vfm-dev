# 📌 Escopo do Projeto — Portfólio Web Pessoal

## 1. Identificação do Projeto

| Campo | Descrição |
|---|---|
| **Nome do projeto** | Portfólio Web Pessoal |
| **Solicitante/Cliente** | Estudante de Análise e Desenvolvimento de Sistemas (desenvolvedor) |
| **Tipo de projeto** | Website pessoal (portfólio profissional) |
| **Data de elaboração do escopo** | Setembro de 2026 |
| **Versão do documento** | 1.0 |

## 2. Contexto e Justificativa

O solicitante é um estudante de Análise e Desenvolvimento de Sistemas que busca ingressar no mercado de trabalho como desenvolvedor, seja por meio de **estágio** ou de sua **primeira oportunidade profissional**. Atualmente possui um número reduzido de projetos prontos (1 a 2), o que reforça a necessidade de um portfólio bem apresentado, que maximize o impacto de cada projeto exibido.

Um portfólio web é, neste contexto, mais do que uma vitrine de projetos: é uma **ferramenta de conversão** que precisa comunicar rapidamente a um recrutador técnico quem é o candidato, o que ele sabe fazer e como entrar em contato.

## 3. Objetivo Geral

Desenvolver um site de portfólio pessoal, responsivo e acessível, que apresente de forma clara e objetiva o perfil profissional do desenvolvedor, seus projetos, habilidades técnicas, formação e experiência, com o fim específico de **apoiar a busca por estágio ou primeiro emprego na área de desenvolvimento de software**.

## 4. Objetivos Específicos

- Apresentar o desenvolvedor de forma profissional através de uma seção "Sobre mim".
- Exibir os projetos já desenvolvidos com destaque visual e técnico.
- Listar as habilidades e tecnologias dominadas ou em aprendizado.
- Apresentar a formação acadêmica (curso de ADS) e experiências profissionais, se houver.
- Disponibilizar múltiplos canais de contato, incluindo formulário funcional.
- Permitir o download do currículo em PDF.
- Garantir boa experiência em dispositivos móveis e desktop.
- Garantir boa indexação em mecanismos de busca (SEO básico).
- Garantir acessibilidade mínima para diferentes tipos de usuários.

## 5. Escopo Incluído (o que SERÁ desenvolvido)

- Página única (single page) ou multi-seção com navegação por âncoras, contendo:
  - Sobre mim
  - Projetos
  - Habilidades/Tecnologias
  - Formação acadêmica
  - Experiência profissional
  - Contato
- Botão de download do currículo em PDF.
- Formulário de contato funcional + links diretos (e-mail, LinkedIn, GitHub, WhatsApp).
- Alternância entre modo claro e escuro.
- Layout responsivo (mobile, tablet, desktop).
- Boas práticas de acessibilidade (WCAG nível básico/AA onde aplicável).
- Boas práticas de SEO on-page (meta tags, semântica HTML, Open Graph).
- Deploy em ambiente gratuito (Vercel ou Netlify).
- Documentação técnica do projeto (este conjunto de arquivos).

## 6. Escopo Excluído (o que NÃO será desenvolvido nesta fase)

- Blog ou sistema de publicação de artigos.
- Painel administrativo (CMS) para editar conteúdo sem mexer no código.
- Backend robusto com banco de dados (o formulário de contato usará serviço de terceiros ou função serverless simples).
- Autenticação de usuários/login.
- Versões multilíngue (i18n) — pode ser considerado em fase futura.
- Testes automatizados completos (E2E) — poderá ser incluído como evolução futura, mas não é requisito desta entrega.
- Domínio próprio pago (será usado o subdomínio gratuito da hospedagem, salvo decisão futura em contrário).

## 7. Premissas

- O projeto será desenvolvido com apoio de ferramentas/agentes de IA como par de desenvolvimento.
- O solicitante fornecerá o conteúdo textual (biografia, descrição dos projetos, dados de contato) e os arquivos de mídia (foto, currículo em PDF).
- Os 1-2 projetos existentes serão usados como conteúdo inicial da seção "Projetos", com possibilidade de expansão futura.
- O código será hospedado em repositório Git (GitHub), servindo também como evidência de versionamento para recrutadores.

## 8. Restrições

- **Orçamento:** zero custo — apenas ferramentas e hospedagens gratuitas.
- **Prazo:** sem prazo fixo definido; desenvolvimento no ritmo do solicitante, com uso de agentes de IA para acelerar etapas.
- **Tecnologia:** obrigatoriamente baseado em React (ou outro framework JS), conforme decisão do solicitante.
- **Equipe:** desenvolvimento solo, com apoio de IA.

## 9. Critérios de Sucesso

O projeto será considerado bem-sucedido quando:

1. O site estiver publicado e acessível publicamente via link.
2. Todas as seções definidas no escopo estiverem implementadas e com conteúdo real (não lorem ipsum).
3. O site funcionar corretamente em dispositivos móveis e desktop.
4. O currículo estiver disponível para download.
5. O formulário de contato estiver funcional (envio de mensagem testado com sucesso).
6. O site atender a critérios básicos de acessibilidade e SEO (validáveis por ferramentas como Lighthouse).
7. O solicitante conseguir compartilhar o link do portfólio em candidaturas de estágio/emprego.

## 10. Partes Interessadas (Stakeholders)

| Stakeholder | Papel |
|---|---|
| Estudante de ADS | Solicitante, desenvolvedor e usuário final administrador do conteúdo |
| Recrutadores/RH | Público-alvo primário, avaliam o portfólio como parte do processo seletivo |
| Gestores técnicos/Tech Leads | Público-alvo secundário, avaliam qualidade técnica do código e das decisões |
| Colegas de curso/comunidade dev | Público-alvo terciário, networking |

## 11. Riscos Identificados

| Risco | Impacto | Mitigação |
|---|---|---|
| Poucos projetos para exibir (1-2) | Médio-Alto | Capricho na apresentação de cada projeto (contexto, desafio, solução, tecnologias, aprendizados); considerar adicionar um projeto extra simples focado em demonstrar boas práticas |
| Ausência de prazo definido pode gerar procrastinação | Médio | Uso do cronograma por fases (documento 07) como guia motivacional, mesmo sem datas fixas |
| Formulário de contato depender de serviço externo gratuito | Baixo | Escolher serviço confiável (ex.: EmailJS, Formspree) e ter fallback de link direto (mailto) |
| Falta de conteúdo textual (biografia, descrições) travar o desenvolvimento | Médio | Elicitação de conteúdo específica antes da fase de implementação |

## 12. Aprovação

Este escopo foi elaborado com base nas respostas fornecidas pelo próprio solicitante durante o processo de elicitação de requisitos (ver documento `02-elicitacao-de-requisitos.md`) e está sujeito a ajustes conforme o projeto evolui.
