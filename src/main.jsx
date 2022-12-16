import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextoMenu } from './contexts/ValueMenu'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextoMenu>
      <App />
    </ContextoMenu>
  </React.StrictMode>
)
