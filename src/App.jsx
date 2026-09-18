import React, { useEffect, useState } from 'react'
import { certifications, profile, skills } from './data/profile.js'

const nav = [
  ['sobre', 'Sobre'],
  ['projetos', 'Projetos'],
  ['habilidades', 'Habilidades'],
  ['formacao', 'Formação'],
  ['contato', 'Contato'],
]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') }
    catch { return 'light' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* Storage can be disabled. */ }
  }, [theme])

  return [theme, setTheme]
}

function SectionHeading({ id, children, aside }) {
  return <div className="section-heading"><h2 id={id}>{children}</h2>{aside && <p>{aside}</p>}</div>
}

function App() {
  const [theme, setTheme] = useTheme()
  const [contactStatus, setContactStatus] = useState('')

  function handleContact(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    if (!name || !email || !message) {
      setContactStatus('Preencha nome, e-mail e mensagem para continuar.')
      return
    }
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`)
    const body = encodeURIComponent(`${message}\n\nDe: ${name}\nE-mail: ${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setContactStatus('Seu aplicativo de e-mail foi aberto com a mensagem pronta para enviar.')
  }

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#inicio" aria-label="Vinícius Marrocos, início">VM<span className="wordmark-dot">.</span></a>
        <nav aria-label="Navegação principal"><ul>{nav.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul></nav>
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Ativar tema ${theme === 'light' ? 'escuro' : 'claro'}`}>
          <span className="theme-indicator" aria-hidden="true" />
          <span>{theme === 'light' ? 'Escuro' : 'Claro'}</span>
        </button>
      </div>
    </header>

    <main id="conteudo">
      <section id="inicio" className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-topline"><span>Portfólio / Desenvolvimento de software</span><span>Socorro · SP</span></div>
        <div className="hero-core">
          <div>
            <h1 id="hero-title">Vinícius<br /><em>Fatichi</em><br />Marrocos<span className="period">.</span></h1>
          </div>
          <div className="hero-side">
            <p className="hero-role">Estudante de ADS<br />&amp; desenvolvedor full stack</p>
            <p>Transformo estudo em aplicações reais, do banco de dados à experiência de quem usa.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Ver projeto <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contato">Entrar em contato <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div className="hero-bottomline"><span>React · Python · FastAPI · PostgreSQL</span><a href="#sobre">Explorar o portfólio ↓</a></div>
      </section>

      <section id="sobre" className="content-section section-shell about-section" aria-labelledby="sobre-title">
        <SectionHeading id="sobre-title" aside="Perfil">Sobre mim</SectionHeading>
        <div className="about-grid">
          <p className="lead-copy">Desenvolvo soluções completas enquanto curso Análise e Desenvolvimento de Sistemas no IFSP.</p>
          <div className="body-copy">
            <p>Tenho experiência prática em projetos pessoais com React, Node.js, FastAPI e bancos de dados relacionais. No VFitness, trabalhei desde a API e autenticação até testes e publicação em produção.</p>
            <p>{profile.objective} {profile.availability}</p>
            <p>Uso Git e GitHub no desenvolvimento, estudo novas tecnologias com autonomia e tenho inglês avançado/fluente.</p>
          </div>
        </div>
      </section>

      <section id="projetos" className="content-section project-section" aria-labelledby="projetos-title">
        <div className="section-shell"><SectionHeading id="projetos-title" aside="Projeto em destaque">Projetos</SectionHeading></div>
        <article className="project-feature section-shell">
          <div className="project-intro">
            <div className="project-title"><span className="project-tag">Aplicação full stack</span><h3>VFitness<span className="period">.</span></h3></div>
            <p>Uma aplicação para organizar treinos físicos, registrar exercícios e acompanhar a evolução de cada usuário.</p>
            <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Explorar meu GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-detail">
            <div className="project-diagram" aria-label="Fluxo da aplicação VFitness: interface React, API FastAPI e banco PostgreSQL">
              <div><small>Interface</small><strong>React</strong></div><span aria-hidden="true">→</span><div><small>API REST</small><strong>FastAPI</strong></div><span aria-hidden="true">→</span><div><small>Dados</small><strong>PostgreSQL</strong></div>
            </div>
            <div className="project-facts">
              <div><h4>O que foi desenvolvido</h4><p>Front-end em React integrado à API REST em Python. Banco PostgreSQL com migrações Alembic e integração com Supabase.</p></div>
              <div><h4>Segurança e entrega</h4><p>Autenticação Google OAuth, controle de acesso, testes automatizados e deploy de front-end e back-end na Vercel.</p></div>
            </div>
            <p className="tech-line"><span>Tecnologias</span> Python · FastAPI · React · PostgreSQL · Alembic · Supabase · Vercel</p>
          </div>
        </article>
      </section>

      <section id="habilidades" className="content-section section-shell" aria-labelledby="habilidades-title">
        <SectionHeading id="habilidades-title" aside="Ferramentas e conhecimentos">Habilidades</SectionHeading>
        <div className="skills-grid">{skills.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
        <div className="additional-skills"><strong>Também aplico</strong><p>APIs REST, OAuth Google, testes automatizados, controle de acesso, CORS, variáveis de ambiente e segurança de dados.</p><p><strong>Idiomas:</strong> português nativo · inglês avançado/fluente.</p></div>
      </section>

      <section id="formacao" className="content-section section-shell education-section" aria-labelledby="formacao-title">
        <SectionHeading id="formacao-title" aside="Aprendizado contínuo">Formação</SectionHeading>
        <div className="education-grid">
          <div className="education-main"><span className="date-range">2026 — 2028 (previsão)</span><h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3><p>IFSP · Instituto Federal de São Paulo<br />Campus Bragança Paulista</p><span className="education-status">Cursando o 2º período</span></div>
          <div className="certifications"><h3>Cursos e certificações</h3><ul>{certifications.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="experience-note"><h3>Experiência prática</h3><p>Minha atuação em desenvolvimento vem de projetos pessoais full stack, incluindo o VFitness. Busco minha primeira oportunidade profissional na área.</p></div>
      </section>

      <section id="contato" className="contact-section" aria-labelledby="contato-title"><div className="section-shell">
        <SectionHeading id="contato-title" aside="Vamos conversar">Contato</SectionHeading>
        <div className="contact-grid">
          <div className="contact-copy"><h3>Tem uma oportunidade ou quer trocar uma ideia?</h3><p>Estou aberto a estágios e posições júnior em desenvolvimento de software.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={`https://wa.me/${profile.phone}`} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div></div>
          <form className="contact-form" onSubmit={handleContact}><p>Escreva sua mensagem. O envio será feito pelo seu aplicativo de e-mail.</p><label htmlFor="name">Nome</label><input id="name" name="name" autoComplete="name" required /><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" autoComplete="email" required /><label htmlFor="message">Mensagem</label><textarea id="message" name="message" rows="4" required /><button className="button button-primary" type="submit">Preparar e-mail <span aria-hidden="true">↗</span></button><p className="form-status" role="status">{contactStatus}</p></form>
        </div>
      </div></section>
    </main>
    <footer className="site-footer section-shell"><span>© {new Date().getFullYear()} Vinícius Fatichi Marrocos</span><span>Feito em Socorro, SP</span><a href="#inicio">Voltar ao topo ↑</a></footer>
  </>
}

export default App


