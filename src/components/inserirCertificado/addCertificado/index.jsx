// import React, { useState } from 'react';
// import axios from 'axios';
// import '../../../page/adicionarCertificados/index'

// function AdicionarCertificado() {
//   const [certificado, setCertificado] = useState({
//     curso: '',
//     instituicao: '',
//     materia: '',
//     certificado: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCertificado({ ...certificado, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/certificados', certificado);
//       console.log(response.data);
//       alert("Certificado inserido com sucesso")
//     } catch (error) {
//       alert('Erro ao adicionar certificado:', error);
//     }
//   };

//   return (
//       <div className='container'>
//     <form onSubmit={handleSubmit} >
//       <input type="text" name="curso" placeholder="Curso" onChange={handleInputChange} value={certificado.curso} />
//       <input type="text" name="instituicao" placeholder="Instituição" onChange={handleInputChange} value={certificado.instituicao} />
//       <input type="text" name="materia" placeholder="Matéria" onChange={handleInputChange} value={certificado.materia} />
//       <input type="text" name="data" placeholder="Data - XX/XX/XXXX" onChange={handleInputChange} value={certificado.data} pattern="\d{2}\/\d{2}\/\d{4}" title="Por favor, insira uma data no formato XX/XX/XXXX."/>
//       <input type="text" name="certificado" placeholder="URL do Certificado" onChange={handleInputChange} value={certificado.certificado} />
//       <button className='inserir' type="submit">Adicionar Certificado</button>
//     </form>
//     </div>
//   );
// }

// export default AdicionarCertificado;
