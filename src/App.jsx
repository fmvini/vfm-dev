import React, { useEffect, useState } from 'react'
import { certifications, profile, skills } from './data/profile.js'

const nav = [
  ['projetos', 'Projetos'],
  ['sobre', 'Sobre'],
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

function ArrowUpRight() {
  return <svg className="arrow-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 16 16 4M6 4h10v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ArrowDown() {
  return <svg className="arrow-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3v13m0 0 5-5m-5 5-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function SectionHeading({ id, children }) {
  return <div className="section-heading"><h2 id={id}>{children}</h2></div>
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
        <div className="hero-topline"><span className="availability"><span className="availability-dot" aria-hidden="true" />Aberto a estágio e posições júnior</span><span>Socorro, SP · Remoto ou presencial</span></div>
        <div className="hero-core">
          <div>
            <h1 id="hero-title">Vinícius<br /><em>Fatichi</em><br />Marrocos<span className="period">.</span></h1>
          </div>
          <div className="hero-side">
            <p className="hero-role">Desenvolvedor full stack<br />em formação.</p>
            <p>No VFitness, conectei React, FastAPI e PostgreSQL para organizar treinos e acompanhar a evolução de usuários.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Conhecer VFitness <ArrowUpRight /></a>
              <a className="text-link" href="#contato">Entrar em contato <ArrowUpRight /></a>
            </div>
          </div>
        </div>
        <div className="hero-bottomline"><span>VFitness: interface, API e banco de dados.</span><a href="#projetos">Ver trabalho selecionado <ArrowDown /></a></div>
      </section>

      <section id="projetos" className="content-section project-section" aria-labelledby="projetos-title">
        <div className="section-shell"><SectionHeading id="projetos-title">Projeto em destaque</SectionHeading></div>
        <article className="project-feature section-shell">
          <div className="project-intro">
            <div className="project-title"><span className="project-tag">Desenvolvimento full stack</span><h3>VFitness<span className="period">.</span></h3></div>
            <p>Uma aplicação para organizar treinos físicos, registrar exercícios e acompanhar a evolução de cada usuário.</p>
            <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Ver meu perfil no GitHub <ArrowUpRight /></a>
          </div>
          <div className="project-detail">
            <div className="project-poster" aria-label="VFitness: treinos, registro de exercícios e acompanhamento de evolução">
              <div className="poster-top"><span>VFitness</span><span>Aplicação web</span></div>
              <div className="poster-center"><span className="poster-mark" aria-hidden="true">VF</span><p>Treinar.<br />Registrar.<br /><em>Evoluir.</em></p></div>
              <div className="poster-bottom"><span>Treinos</span><span>Exercícios</span><span>Evolução</span></div>
            </div>
            <dl className="project-facts">
              <div><dt>Interface e API</dt><dd>React consumindo uma API REST desenvolvida em Python com FastAPI.</dd></div>
              <div><dt>Dados e acesso</dt><dd>PostgreSQL, migrações Alembic, Supabase e autenticação Google OAuth com controle de acesso.</dd></div>
              <div><dt>Testes e produção</dt><dd>Testes automatizados e deploy de front-end e back-end na Vercel, com variáveis de ambiente e CORS.</dd></div>
            </dl>
          </div>
        </article>
      </section>

      <section id="sobre" className="content-section section-shell about-section" aria-labelledby="sobre-title">
        <SectionHeading id="sobre-title">Sobre mim</SectionHeading>
        <div className="about-grid">
          <p className="lead-copy">Sou estudante de ADS no IFSP e construí o VFitness de ponta a ponta.</p>
          <div className="body-copy">
            <p>Estudo desenvolvimento de software colocando cada etapa em prática: interface, API, banco de dados, testes e publicação. Trabalho principalmente com Python, JavaScript e Java.</p>
            <p>{profile.objective} {profile.availability}</p>
            <p>Uso Git e GitHub para organizar meu trabalho e tenho inglês avançado/fluente.</p>
          </div>
        </div>
      </section>

      <section id="habilidades" className="content-section section-shell" aria-labelledby="habilidades-title">
        <SectionHeading id="habilidades-title">Habilidades</SectionHeading>
        <div className="skills-grid">{skills.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
        <div className="additional-skills"><strong>Também aplico</strong><p>APIs REST, OAuth Google, testes automatizados, controle de acesso, CORS, variáveis de ambiente e segurança de dados.</p><p><strong>Idiomas:</strong> português nativo · inglês avançado/fluente.</p></div>
      </section>

      <section id="formacao" className="content-section section-shell education-section" aria-labelledby="formacao-title">
        <SectionHeading id="formacao-title">Formação</SectionHeading>
        <div className="education-grid">
          <div className="education-main"><span className="date-range">2026 — 2028 (previsão)</span><h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3><p>IFSP · Instituto Federal de São Paulo<br />Campus Bragança Paulista</p><span className="education-status">Cursando o 2º período</span></div>
          <div className="certifications"><h3>Cursos e certificações</h3><ul>{certifications.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="experience-note"><h3>Experiência prática</h3><p>Minha atuação em desenvolvimento vem de projetos pessoais full stack, incluindo o VFitness. Busco minha primeira oportunidade profissional na área.</p></div>
      </section>

      <section id="contato" className="contact-section" aria-labelledby="contato-title"><div className="section-shell">
        <SectionHeading id="contato-title">Contato</SectionHeading>
        <div className="contact-grid">
          <div className="contact-copy"><h3>Disponível para estágio ou posição júnior.</h3><p>Se o VFitness ou minhas habilidades atendem o que sua equipe procura, escreva por e-mail ou LinkedIn.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight /></a><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a><a href={`https://wa.me/${profile.phone}`} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight /></a></div></div>
          <form className="contact-form" onSubmit={handleContact}><p>Escreva sua mensagem. O envio será feito pelo seu aplicativo de e-mail.</p><label htmlFor="name">Nome</label><input id="name" name="name" autoComplete="name" required /><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" autoComplete="email" required /><label htmlFor="message">Mensagem</label><textarea id="message" name="message" rows="4" required /><button className="button button-primary" type="submit">Preparar e-mail <ArrowUpRight /></button><p className="form-status" role="status">{contactStatus}</p></form>
        </div>
      </div></section>
    </main>
    <footer className="site-footer section-shell"><span>© {new Date().getFullYear()} Vinícius Fatichi Marrocos</span><span>Feito em Socorro, SP</span><a href="#inicio">Voltar ao topo</a></footer>
  </>
}

export default App


