import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../page/home';
import Certificados from '../page/certificados';
import AtividadeExtracurricular from '../page/atividadesExtracurricular';
// import InserirCertificados from '../page/adicionarCertificados';
import MeusProjetos from '../page/meusProjetos/github';
// import Estatisticas from '../page/estatisticas';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/certificados' element={<Certificados />} />
            <Route path='/extracurricular' element={<AtividadeExtracurricular />} />
            <Route path='/projetos' element={<MeusProjetos />} />
            {/* <Route path='/estatisticas' element={<Estatisticas />} /> */}
        </Routes>
    </BrowserRouter>
);

export default Rotas;
