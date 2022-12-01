import { TypographyProps } from "./typography.types";
import * as css from './typography.styles'
import { useThemeContext } from "../../contexts/theme-context";

const Typography: React.FC<TypographyProps> = ({
  children,
  fontSize = 'sm',
  fontWeight = '600',
  lineHeight = 'XS',
  as,
}) => {
  const { themeMode } = useThemeContext()

  return (
    <css.TypographyContainer 
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      mode={themeMode}
      as={as}
    >
      {children}
    </css.TypographyContainer>
  )
}

export default Typography