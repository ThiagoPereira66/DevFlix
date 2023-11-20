import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './style/globalStyle'

import Rotas from './routes/routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Router/>    
      <Rotas />
      <GlobalStyle/>
    </BrowserRouter>

  </React.StrictMode>,
)
