import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
    <App />   // or we can do like App() calling function here 
  
)



// first create npm create vite that will make a folder for react