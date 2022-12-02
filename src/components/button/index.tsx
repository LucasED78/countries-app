import { HtmlHTMLAttributes } from "react";
import { useThemeContext } from "../../contexts/theme-context";
import * as css from './button.styles'
import { ButtonProps } from "./button.types";

const Button: React.FC<ButtonProps> = ({
  prefixIcon,
  children,
  padding,
  ...props
}) => {
  const { themeMode } = useThemeContext()
  
  return (
    <css.Button mode={themeMode} {...props} padding={padding}>
      { prefixIcon }

      { children }
    </css.Button>
  )
}

export default Button