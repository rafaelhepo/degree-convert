import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './DegreeConvert.css'
import { ConvertToCel } from '../DegreeConvert'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConvertToCel />
  </React.StrictMode>,
)
