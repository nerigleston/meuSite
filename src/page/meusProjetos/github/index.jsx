import React from "react";
import "./style.css"
import Header from "../../../components/Header";
import FooterAbsolute from "../../../components/Footer/FooterAbsolute";
import FooterStatic from "../../../components/Footer/FooterStatic";

function MeusProjetos() {
  return (
    <>
      <Header />
      <div className="github">
        <a className="stats" href="https://github.com/nerigleston"><h1>Estatísticas GitHub</h1>
          <h3>Nerigleston</h3></a>
        <div className="gitImg">
          <img className="maior" src="https://github-readme-stats.vercel.app/api?username=nerigleston&show_icons=true&theme=radical" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nerigleston&layout=compact&theme=radical" />
        </div>
      </div>
      <FooterStatic />
    </>
  )
}

export default MeusProjetos