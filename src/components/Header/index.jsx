import React from "react";
import './style.css'

function Header() {
  return (
    <>
      <header className="header">
        <div className="sobreMim">
          <a className="eu" href="/">Sobre Mim</a>
          <a className="certificados" href="/certificados">Certificados</a>
          <a className="atividade" href="/extracurricular">Atividade Extracurricular</a>
          <a className="projetos" href="/projetos">GitHub</a>
          {/* <a className="stats" href="/estatisticas">Estatisticas</a> */}
        </div>
      </header>
    </>
  )
}

export default Header