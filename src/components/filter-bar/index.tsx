import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../input'
import { useThemeContext } from '../../contexts/theme-context'
import { useFiltersContext } from '../../contexts/filters-context'
import * as css from './filter-bar.styles'
import { useTheme } from 'styled-components'
import { Theme } from '../../theme'

const FilterBar = () => {
  const theme = useTheme() as Theme
  const { themeMode } = useThemeContext()
  const { search, setSearch } = useFiltersContext()

  return (
    <css.Container>
      <Input
        placeholder="Search for a country"
        prefixIcon={<FontAwesomeIcon icon={faMagnifyingGlass} color={theme.colors[themeMode].input} />}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
  </css.Container>
  )
}

export default FilterBar