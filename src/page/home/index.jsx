import React from 'react'
import './style.css'
import Header from '../../components/Header'
import SobreMim from '../../components/sobreMim/resumo'
import FormacaoAcademica from '../../components/sobreMim/formacaoAcademica'
import MeuNome from '../../components/sobreMim/nome/meuNome'
import Habilidades from '../../components/sobreMim/habilidades'
import FooterStatic from '../../components/Footer/FooterStatic'


function Home() {
  return (
    <>
        <Header />
        <div className='texto'>
          <MeuNome />
          <div className='resumo'>
            <SobreMim />
          </div>
          <div className='formacao'>
            <FormacaoAcademica />
          </div>
          <div className='habilidades'>
            <Habilidades />
          </div>
        </div>
        <FooterStatic />
    </>
  )
}

export default Home
