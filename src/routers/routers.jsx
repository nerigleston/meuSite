import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './../style.css';
import Home from '../page/home';
import Certificados from '../page/certificados';
import AtividadeExtracurricular from '../page/atividadesExtracurricular';
import MeusProjetos from '../page/meusProjetos/github';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/certificados" element={<Certificados />} />
                <Route path="/extracurricular" element={<AtividadeExtracurricular />} />
                <Route path="/projetos" element={<MeusProjetos />} />
            </Routes>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
