import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    </style>
    {/* <Other/> */}
    <App />
  
  </StrictMode>,
)
