import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './styles/main.css'

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('instagram')
)
