import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../input'
import { useThemeContext } from '../../contexts/theme-context'
import { useFiltersContext } from '../../contexts/filters-context'
import { useTheme } from 'styled-components'
import { Theme } from '../../theme'
import Select from '../select'
import * as css from './filter-bar.styles'
import { ERegion } from '../../typing'
import { SelectItem } from '../select/select.types'

const FilterBar = () => {
  const theme = useTheme() as Theme
  const { themeMode } = useThemeContext()
  const { search, setSearch, region, setRegion } = useFiltersContext()

  const regions = Object.keys(ERegion)
  const selectItems = [
    { label: 'All', value: 'All' },
    ...regions.map(region => ({ label: region, value: region }))
  ] as SelectItem[]

  return (
    <css.Container>
      <Input
        placeholder="Search for a country"
        prefixIcon={<FontAwesomeIcon icon={faMagnifyingGlass} color={theme.colors[themeMode].input} />}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />

      <Select 
        placeholder="Filter by Region"
        items={selectItems}
        onSelect={({ value }) => setRegion(value === 'All' ? undefined : value as ERegion)}
        value={region}
      />
  </css.Container>
  )
}

export default FilterBar