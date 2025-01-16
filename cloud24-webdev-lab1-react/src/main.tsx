import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './main.css';
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App/>
    </StrictMode>
  </BrowserRouter>
)
