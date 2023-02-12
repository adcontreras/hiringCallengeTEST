import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Welcome from './Components/Welcome';
import Images from './Components/Images';
import Pencil from './Components/Pencil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome />
    <Pencil />
    <Images />

  </React.StrictMode>,
)
