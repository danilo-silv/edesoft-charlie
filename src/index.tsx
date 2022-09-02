import React from 'react'

import './styles/base.css'
import 'tailwindcss/tailwind.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './components/organisms/App'
import store from './reducks/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
