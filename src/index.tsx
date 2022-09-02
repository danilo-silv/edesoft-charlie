import React from 'react'

import './styles/base.css'
import 'tailwindcss/tailwind.css'
import ReactDOM from 'react-dom/client'

import { Wrapper } from './components/organisms'
import App from './components/organisms/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
)
