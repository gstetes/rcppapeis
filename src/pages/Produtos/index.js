import React from 'react'

import './styles.css'

import PizzaImg from '../../assets/PizzaIcon.svg'
import SalgadoImg from '../../assets/SalgadoIcon.svg'
import ChapaImg from '../../assets/ChapaIcon.svg'
import BobinaImg from '../../assets/BobinaIcon.svg'

export default function Produtos() {
  return (
    <div className="produtosContainer">
      <strong>Nossos Produtos</strong>
      <div className="produtosContent">
        <section className="pizza">
          <strong>Caixas de Pizza</strong>
          <img src={PizzaImg} alt="Img" />
          <p>Feita em diversos tamanhos, nossas caixas para pizza foram feitas para atender a demanda diferenciada do mercado.</p>
        </section>
        <section className="salgado">
          <strong>Caixas de Salgado</strong>
          <img src={SalgadoImg} alt="Img" />
          <p>Feita em diversos tamanhos, nossas caixas para salgado foram feitas para atender a demanda diferenciada do mercado.</p>
        </section>
        <section className="chapa">
          <strong>Chapas / Bobinas</strong>
          <div className="doubleImage">
            <img src={ChapaImg} alt="Img" />
            <img src={BobinaImg} alt="Img" />
          </div>
          <p>Feita em diversos tamanhos, nossas caixas para pizza foram feitas para atender a demanda diferenciada do mercado.</p>
        </section>
      </div>
    </div>
  )
}