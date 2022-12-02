import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { FiltersContextProvider } from '../contexts/filters-context'
import Home from '../pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <FiltersContextProvider>
            <Home />
          </FiltersContextProvider>
        )
      }
    ]
  }
])

export default routes