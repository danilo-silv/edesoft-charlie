import React from 'react'

import ReactDOM from 'react-dom/client'

import './styles/base.css'
import 'tailwindcss/tailwind.css'

import App from './components/organisms/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
