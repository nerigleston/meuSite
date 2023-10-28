import React from "react";
import './style.css'
import Header from "../../components/Header";
import FooterAbsolute from "../../components/Footer/FooterAbsolute";
import FooterStatic from "../../components/Footer/FooterStatic";

function AtividadeExtracurricular() {
  return (
    <>
      <Header />
      <div className="atividades">
        <h1>Atividade Extracurricular</h1>
        <p>Estou tendo o privilégio de participar de um programa de
          imersão chamado “Fábrica de Software” realizado na UNIPÊ,
          que consiste em um programa no qual as empresas que ,
          necessitam de um software, solicitam um projeto aos alunos e
          os mesmos formam equipes para a entrega de um software.
          Essa experiência está sendo gratificante, enriquecedora,
          proporcionando aprendizadoprático e
          amplo em desenvolvimento de software.</p>
      </div>
      <FooterAbsolute />
    </>
  )
}

export default AtividadeExtracurricular