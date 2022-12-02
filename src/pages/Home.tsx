import { useDebounce } from 'use-debounce'
import Card from "../components/card"
import CountryCard from "../components/country-card"
import { useCountries } from "../hooks/use-countries"
import FilterBar from "../components/filter-bar"
import { useFiltersContext } from "../contexts/filters-context"

const Home = () => {
  const { search, region } = useFiltersContext()
  const [debouncedValue] = useDebounce(search, 800)
  const { data = [], isLoading } = useCountries({ search: debouncedValue, region })  

  return (
    <>
      <FilterBar />
      <Card.Grid>
        {
          !isLoading && (
            data.map(country => (
              <CountryCard key={country.name.common} country={country} />
            ))
          )
        }

        {isLoading && Array(8).fill('').map((_, index) => (
          <CountryCard key={index} loading />
        ))}
      </Card.Grid>
    </>
  )
}

export default Home