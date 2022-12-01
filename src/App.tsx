import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import * as css from './styles'
import { useThemeContext } from './contexts/theme-context'
import Navbar from './components/navbar'
import Home from './pages/Home'
import { FiltersContextProvider } from './contexts/filters-context'

const App = () => {
  const { themeMode } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <css.GlobalStyle mode={themeMode} />
      <Navbar />
      <css.Container>
        <FiltersContextProvider>
          <Home />
        </FiltersContextProvider>
      </css.Container>
    </ThemeProvider>
  )
}

export default App
