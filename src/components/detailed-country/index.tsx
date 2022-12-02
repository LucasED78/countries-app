import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'
import { useCountryMetadataContext } from '../../contexts/country-metadata-context'
import Typography from '../typography'
import BordersSection from './components/borders-section'
import CountryInfoSection from './components/country-info-section'
import * as css from './detailed-country.styles'
import { DetailedCountryProps } from './detailed-country.types'

const DetailedCountry: React.FC<DetailedCountryProps> = (props) => {
  const {
    country,
    loading,
  } = props
  const {
    name,
    borders = [],
    cca2
  } = country
  const { namesWithCCA } = useCountryMetadataContext()  
  const navigate = useNavigate()
  const ImageSkeleton = () => <Skeleton width="100%" height="375px" />
  
  return (
    <css.Container>
      <css.ContentContainer>
        {
          loading
            ? <ImageSkeleton />
            : (
                <css.Image
                  placeholder={<ImageSkeleton />}
                  src={`https://flagcdn.com/w1280/${cca2.toLowerCase()}.png`}
                  alt={`flag of ${name?.common}`}
                />
              )
        }
      </css.ContentContainer>

      <css.ContentContainer>
        {
          loading
            ? <Skeleton width="100%" height="35px" />
            : <Typography fontSize='XL' fontWeight='800'>
                { name?.common }
              </Typography>
        }

        <CountryInfoSection country={country} loading={loading} />

        <BordersSection
          borders={borders}
          onBorderClick={border => navigate(`/${namesWithCCA[border].toLowerCase()}`)}
          loading={loading}
        />
      </css.ContentContainer>
    </css.Container>
  )
}

export default DetailedCountry