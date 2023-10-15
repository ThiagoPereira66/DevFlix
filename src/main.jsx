import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './style/globalStyle'

import Router from './routes/routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Router />
      <GlobalStyle/>
    </BrowserRouter>

  </React.StrictMode>,
)
