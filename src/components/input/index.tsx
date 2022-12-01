import { useThemeContext } from '../../contexts/theme-context'
import * as css from './input.styles'
import { InputProps } from "./input.types"

const Input: React.FC<InputProps> = ({ prefixIcon, ...props }) => {
  const { themeMode } = useThemeContext()

  return (
    <css.InputContainer>
      { prefixIcon && (
        <css.IconContainer>
          { prefixIcon }
        </css.IconContainer>
      ) }
      <css.Input mode={themeMode} {...props} />
    </css.InputContainer>
  )
}

export default Input