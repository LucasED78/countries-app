import Skeleton from "react-loading-skeleton";
import { useThemeContext } from "../../contexts/theme-context";
import Card from "../card";
import Typography from "../typography";
import { CountryCardDefault, CountryCardProps, CountryCardWithLoading } from "./country-card.types";
import 'react-loading-skeleton/dist/skeleton.css'

const CountryCard: React.FC<CountryCardProps> = (props) => {
  const hasLoading = (props: CountryCardProps): props is CountryCardWithLoading => 'loading' in props;
  if (hasLoading(props)) {
    if (props.loading) return <Skeleton width="277px" height="293px" borderRadius="6px" />
  }
  
  const { themeMode } = useThemeContext()
  const {
    country: {
      name: {
        common
      },
      population,
      region,
      capital,
      flags: {
        png
      }
    }
  } = props as CountryCardDefault

  return (
    <Card.Container mode={themeMode}>
      <div>
        <Card.Image src={png} />
      </div>
      <Card.Body mode={themeMode}>
        <Card.Title>
          <Typography fontSize="MD" fontWeight="800" lineHeight="MD">
            { common }
          </Typography>
        </Card.Title>

        <Typography fontSize="XS" lineHeight="MD">
          Population: 
          {''} <Typography fontSize="XS" fontWeight="300" lineHeight="MD" as="span">
            { Intl.NumberFormat('en-uk').format(population) }
          </Typography>
        </Typography>
        
        <Typography fontSize="XS" lineHeight="MD">
          Region: 
          {''} <Typography fontSize="XS" fontWeight="300" lineHeight="MD" as="span">
            { region }
          </Typography>
        </Typography>
        
        <Typography fontSize="XS" lineHeight="MD">
          Capital: 
          {''} <Typography fontSize="XS" fontWeight="300" lineHeight="MD" as="span">
            { capital }
          </Typography>
        </Typography>
      </Card.Body>
    </Card.Container>
  )
}

export default CountryCard