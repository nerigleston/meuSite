import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './routers/routers.jsx'
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>,
)