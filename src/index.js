import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './index.scss'
import routes from './routes'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from '@redux/store'

const App = () => useRoutes(routes)

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
reportWebVitals()
