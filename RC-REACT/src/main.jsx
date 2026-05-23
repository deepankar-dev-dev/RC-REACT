import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import App from './App.jsx'
//mport App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);