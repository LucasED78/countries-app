import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Button from "../../components/button"
import DetailedCountry from "../../components/detailed-country"
import Icon from "../../components/Icon"
import Typography from "../../components/typography"
import { useCountries } from "../../hooks/use-countries"
import useNamesWithCCA from "../../hooks/use-names-with-caa"
import * as css from './country-detail.styles'

const CountryDetail = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const state = location.state as ICountry
  const { data, isLoading } = useCountries({ skip: !!state, search: params.country })
  const namesWithCCA = useNamesWithCCA()

  const country = state ?? data?.at(0) ?? {}  
  
  const loading = isLoading || Object.keys(namesWithCCA).length === 0

  console.log({ loading });
  

  return (
    <css.Container>
      <Button
        prefixIcon={
          <Icon icon={faArrowLeftLong} />
        }
        onClick={() => navigate('/')}
      >
        <Typography fontSize="XS">
          Back
        </Typography>

      </Button>
      <DetailedCountry country={country} loading={loading} />
    </css.Container>
  )
}

export default CountryDetail