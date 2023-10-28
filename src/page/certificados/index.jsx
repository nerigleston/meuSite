import React from "react";
import './style.css'
import Header from "../../components/Header";
import APICertificados from "../../components/certificadosAPI";
import FooterStatic from "../../components/Footer/FooterStatic/index";


function Certificados() {
  return (
    <>
      <Header />
      <APICertificados />
      <FooterStatic />
    </>
  )
}

export default Certificados;
