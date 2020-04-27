import React from 'react'

import './styles.css'

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <section className="footerLocation">
          <strong>Localização</strong>
          <p>Rua 9JC, N°100</p>
          <p>Jardim Maria Cristina</p>
          <p>Rio Claro - SP</p>
        </section>
        <section className="footerContact">
          <strong>Telefone para Contato</strong>
          <p>(19)3023-3238</p>
          <strong>E-mail</strong>
          <p>vendas@rcppapeis.com.br</p>
        </section>
      </div>
    </>
  )
}