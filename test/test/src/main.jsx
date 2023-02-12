import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Welcome from './Components/Welcome';
import Images from './Components/Images';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome />
    <Images />

  </React.StrictMode>,
)
