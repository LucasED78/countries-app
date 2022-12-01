import { useDebounce } from 'use-debounce'
import Card from "../components/card"
import CountryCard from "../components/country-card"
import { useCountries } from "../hooks/use-countries"
import FilterBar from "../components/filter-bar"
import { useFiltersContext } from "../contexts/filters-context"

const Home = () => {
  const { search } = useFiltersContext()
  const [debouncedValue] = useDebounce(search, 800)
  const { data = [], isLoading } = useCountries({ search: debouncedValue })  
  
  if (isLoading) return <>loading...</>

  return (
    <>
      <FilterBar />
      <Card.Grid>
        {
          data.map(country => (
            <CountryCard key={country.name.common} country={country} />
          ))
        }
      </Card.Grid>
    </>
  )
}

export default Home