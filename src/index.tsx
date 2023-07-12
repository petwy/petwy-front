import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import 'tailwindcss/tailwind.css'
import App from './views/app/App'
import { Provider } from 'react-redux'
import store from './adapters/redux/store'
import { BrowserRouter } from 'react-router-dom'
import { TitleProvider } from './shared/hooks/useTitlePage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TitleProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TitleProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
