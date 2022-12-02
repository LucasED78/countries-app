import { useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import Card from "../../components/card"
import CountryCard from "../../components/country-card"
import { useCountries } from "../../hooks/use-countries"
import FilterBar from "../../components/filter-bar"
import { useFiltersContext } from "../../contexts/filters-context"
import { useNavigate } from 'react-router-dom'
import { useCountryMetadataContext } from '../../contexts/country-metadata-context'

const Home = () => {
  const { search, region } = useFiltersContext()
  const [debouncedValue] = useDebounce(search, 800)
  const { data = [], isLoading } = useCountries({ search: debouncedValue, region })  
  const navigate = useNavigate()
  const { namesWithCCA, addNames } = useCountryMetadataContext()

  useEffect(() => {
    if (data.length && !Object.keys(namesWithCCA).length) {
      addNames(data)
    }
  }, [data])

  return (
    <>
      <FilterBar />
      <Card.Grid>
        {
          !isLoading && (
            data.map(country => (
              <CountryCard
                key={country.name.common}
                country={country}
                onCountryClick={() => navigate(
                  `/${country.name.common.toLowerCase()}`,
                  {
                    state: country
                  }
                )}
              />
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