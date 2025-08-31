import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import toast, { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>,
)
