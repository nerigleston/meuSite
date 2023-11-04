import React, { useState, useEffect } from "react";
import ProgressCircle from "../Loading";

function APICertificados() {
  const [certificados, setCertificados] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificados() {
      try {
        const response = await fetch("https://meuportifolioapi-production.up.railway.app/certificados");
        const data = await response.json();
        setCertificados(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar certificados:", error);
        setLoading(false);
      }
    }

    fetchCertificados();
  }, []);

  return (
    <>
      <div className="nome">
        <a href="https://drive.google.com/drive/u/0/folders/1MKkxyxwFR228bzpK1vIx8Cj8EJt2cj"><h1>Meus Certificados</h1></a>
      </div>
      <div className="certificados">
        {Loading ? (
          <div className="loading">
            <ProgressCircle />
          </div>
        ) : (
          certificados.map((certificado, index) => (
            <div key={index}>
              <div className="background">
                <img src={certificado.certificadoimg} alt={`Certificado ${certificado.curso}`} />
                <p>Instituição: {certificado.instituicao}</p>
                <p>Competências: {certificado.materia}</p>
                <p>Data: {certificado.data}</p>
                <p>Curso: {certificado.curso}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default APICertificados;