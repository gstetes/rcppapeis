import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/produtos" component={Produtos} />
      <Route path="/sobre" component={Sobre} />
    </Switch>
  )
}
