import Skeleton from 'react-loading-skeleton'
import Typography from '../../../typography'
import * as css from './country-info-section.styles'
import { CountryInfoSectionProps } from './country-info-section.types'

const CountryInfoSection: React.FC<CountryInfoSectionProps> = ({ loading, country }) => {
  if (loading) return <Skeleton width="100%" height="132px" />

  if(country) {
    const {
      name: {
        nativeName
      },
      population,
      region,
      subregion,
      tld: [topLevelDomain],
      capital,
      languages,
      currencies
    } = country
    const [nativeNameKey] = Object.keys(nativeName)

    return (
      <css.CountryInfoContainer>
        <css.CountryInfoContent>
          <Typography fontSize='XS' fontWeight='600' lineHeight='XL'>
            Native name:{' '}
            <Typography fontSize='XS' fontWeight='300' as="span">
              { nativeName[nativeNameKey].common }
            </Typography>
          </Typography>
    
          <Typography fontSize='XS' fontWeight='600' lineHeight='XL'>
            Population:{' '}
            <Typography fontSize='XS' fontWeight='300' as="span">
              { Intl.NumberFormat('en-uk').format(population) }
            </Typography>
          </Typography>
    
          <Typography fontSize='XS' fontWeight='600' lineHeight='XL'>
            Region:{' '}
            <Typography fontSize='XS' fontWeight='300' as="span">
              { region }
            </Typography>
          </Typography>
          
          <Typography fontSize='XS' fontWeight='600' lineHeight='XL'>
            Sub Region:{' '}
            <Typography fontSize='XS' fontWeight='300' as="span">
              { subregion }
            </Typography>
          </Typography>
          
          <Typography fontSize='XS' fontWeight='600' lineHeight='XL'>
            Capital:{' '}
            <Typography fontSize='XS' fontWeight='300' as="span">
              { capital }
            </Typography>
          </Typography>
        </css.CountryInfoContent>
    
        <css.CountryInfoContent>
          <Typography fontSize='XS' fontWeight='600' lineHeight='XL'>
            Top Level Domain:{' '}
            <Typography fontSize='XS' fontWeight='300' as="span">
              { topLevelDomain }
            </Typography>
          </Typography>
    
          <Typography fontSize='XS' fontWeight='600' lineHeight='XL'>
            Currencies:{' '}
            <Typography fontSize='XS' fontWeight='300' as="span">
              { Object
                  .keys(currencies)
                  .map(currencyKey => currencies[currencyKey].name)
                  .join(', ') }
            </Typography>
          </Typography>
    
          <Typography fontSize='XS' fontWeight='600' lineHeight='XL'>
            Languages:{' '}
            <Typography fontSize='XS' fontWeight='300' as="span">
            { Object
                  .keys(languages)
                  .map(languageKey => languages[languageKey])
                  .join(', ') }
            </Typography>
          </Typography>
        </css.CountryInfoContent>
      </css.CountryInfoContainer>
    )
  }

  return <></>
}

export default CountryInfoSection