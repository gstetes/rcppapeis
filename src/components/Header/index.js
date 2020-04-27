import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import LogoImg from '../../assets/LogoImg.png'

export default function Header() {
  return (
    <div className="headerContainer">
      <Link to={"/"}>
        <img src={LogoImg} alt="Logo" />
      </Link>
      <div className="headerNavs">
        <Link to={"/"}>Início</Link>
        <Link to={"/produtos"}>Produtos</Link>
        <Link to={"/sobre"}>Sobre nós</Link>
      </div>
    </div>
  )
}