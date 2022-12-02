import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { useTheme } from "styled-components";
import { useThemeContext } from "../../contexts/theme-context";
import { Theme } from "../../theme";

const Icon = (props: FontAwesomeIconProps) => {
  const theme = useTheme() as Theme
  const { themeMode } = useThemeContext()

  return (
    <FontAwesomeIcon {...props} color={theme.colors[themeMode].text} />
  )
}

export default Icon