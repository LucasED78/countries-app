import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '../typography';
import * as css from './navbar.styles'
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { useThemeContext } from '../../contexts/theme-context';
import { EThemeMode } from '../../contexts/theme-context/typing';
import { useTheme } from 'styled-components';
import { Theme } from '../../theme';

const Navbar = () => {
  const { themeMode, setThemeMode } = useThemeContext()
  const theme = useTheme() as Theme

  const iconByMode = {
    [EThemeMode.Dark]: faMoonSolid,
    [EThemeMode.Light]: faMoon
  }

  const textByMode = {
    [EThemeMode.Dark]: 'Light Mode',
    [EThemeMode.Light]: 'Dark Mode'
  }

  const themeReplacer = {
    [EThemeMode.Dark]: EThemeMode.Light,
    [EThemeMode.Light]: EThemeMode.Dark,
  }  

  return (
    <css.Nav mode={themeMode}>
      <Typography fontSize='MD' fontWeight='800'>
        Where in the world?
      </Typography>

      <css.IconContainer onClick={() => setThemeMode(themeReplacer[themeMode])}>
        <FontAwesomeIcon
         icon={iconByMode[themeMode]}
         color={theme.colors[themeMode.toLowerCase() as keyof Theme['colors']].text}
        />
        
        <Typography fontWeight='300'>
          {textByMode[themeMode]}
        </Typography>
      </css.IconContainer>
    </css.Nav>
  )
}

export default Navbar;