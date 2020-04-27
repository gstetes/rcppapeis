import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Main() {
  return (
    <div className="mainContainer">
      <p>"Estamos sempre fazendo o seu <strong>papel</strong>"</p>
      <div className="mainButtons">
        <Link to="/produtos" id="products">Conheça nossos produtos</Link>
        <Link to="/sobre" id="about">Saiba mais sobre nós</Link>
      </div>
    </div>
  )
}