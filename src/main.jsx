import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './style/globalStyle'

import Rotas from './routes/routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<<<<<<< HEAD
    <BrowserRouter>
      <Router/>
=======
    <HashRouter>
      <Rotas />
>>>>>>> aca99c396a93ca5bc9dc5f2aa55995b74e4e87de
      <GlobalStyle/>
    </HashRouter>

  </React.StrictMode>,
)
