// import React, { useState } from "react";

// function BuscaCertificado() {
//   const [instituicao, setInstituicao] = useState("");
//   const [certificado, setCertificado] = useState("");

//   const buscarCertificado = async () => {
//     if (instituicao) {
//       try {
//         const response = await fetch(`http://localhost:8000/certificados/${instituicao}`);
//         if (response.ok) {
//           const data = await response.json();
//           setCertificado(data.instituicao);
//         } else {
//           setCertificado("Nenhum certificado encontrado.");
//         }
//       } catch (error) {
//         setCertificado("Erro ao buscar certificado: " + error.message);
//       }
//     } else {
//       setCertificado("Por favor, insira o nome da instituição.");
//     }
//   };

//   return (
//     <div>
//       <h1>Buscar Certificado por Instituição</h1>
//       <input
//         type="text"
//         placeholder="Digite o nome da instituição"
//         value={instituicao}
//         onChange={(e) => setInstituicao(e.target.value)}
//       />
//       <button onClick={buscarCertificado}>Buscar</button>
//       <div>
//         <p>Certificado: {certificado}</p>
//       </div>
//     </div>
//   );
// }

// export default BuscaCertificado;
