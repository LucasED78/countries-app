import useSWR from "swr"
import Card from "../components/card"
import CountryCard from "../components/country-card"
import { useThemeContext } from "../contexts/theme-context"
import { fetchCountries } from "../services/country"

const Home = () => {
  const { data } = useSWR('/all', fetchCountries)
  
  if (!data) return <>loading...</>

  return (
    <>
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