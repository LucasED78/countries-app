import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { FiltersContextProvider } from '../contexts/filters-context'
import CountryDetail from '../pages/country-detail'
import Home from '../pages/home'

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
      },
      {
        path: '/:country',
        element: <CountryDetail />
      }
    ]
  }
])

export default routes