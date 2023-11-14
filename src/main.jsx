import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App
   nombrePokemon="ditto"
   /> 
   <App 
    nombrePokemon="pikachu"/> 
   <App 
    nombrePokemon="onix"/> 
  </React.StrictMode>,
)
