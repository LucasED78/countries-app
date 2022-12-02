import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useThemeContext } from '../../contexts/theme-context'
import Typography from '../typography'
import * as css from './select.styles'
import { SelectItem, SelectProps } from './select.types'

const Select: React.FC<SelectProps> = ({
  placeholder,
  value,
  items,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { themeMode } = useThemeContext()

  const getPlaceholderValue = () => {
    if (!value) return placeholder

    return items
      .find(item => item.value === value)
      ?.value
  }

  const handleSelectClick = (item: SelectItem) => {
    onSelect(item);
    setIsOpen(false);
  }

  return (
    <css.Container>
      <css.SelectedItem onClick={() => setIsOpen(!isOpen)} mode={themeMode}>
        <Typography fontSize='XS'>
          { getPlaceholderValue() }
        </Typography>

        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} size="2xs" />
      </css.SelectedItem>

      <css.SelectList isOpen={isOpen} mode={themeMode}>
        {items.map(({ label, value }) => (
          <div key={value} onClick={() => handleSelectClick({ label, value })}>
            <Typography fontSize='XS' lineHeight='LG'>
              { label }
            </Typography>
          </div>
        ))}
      </css.SelectList>
    </css.Container>
  )
}

export default Select