import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Rotas from './routers/routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>,
)