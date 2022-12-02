import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import * as css from './styles'
import { useThemeContext } from './contexts/theme-context'
import Navbar from './components/navbar'
import { CountryMetadataContextProvider } from './contexts/country-metadata-context'

const App = () => {
  const { themeMode } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <css.GlobalStyle mode={themeMode} />
      <Navbar />
      <css.Container>
        <CountryMetadataContextProvider>
          <Outlet />
        </CountryMetadataContextProvider>
      </css.Container>
    </ThemeProvider>
  )
}

export default App
