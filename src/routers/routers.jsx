import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../page/home';
import Certificados from '../page/certificados';
import AtividadeExtracurricular from '../page/atividadesExtracurricular';
import MeusProjetos from '../page/meusProjetos/github';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certificados" element={<Certificados />} />
                <Route path="/extracurricular" element={<AtividadeExtracurricular />} />
                <Route path="/projetos" element={<MeusProjetos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas