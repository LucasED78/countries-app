import { useThemeContext } from "../../contexts/theme-context";
import Card from "../card";
import Typography from "../typography";
import { CountryCardProps } from "./country-card.types";

const CountryCard: React.FC<CountryCardProps> = ({
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
}) => {
  const { themeMode } = useThemeContext()

  return (
    <Card.Container mode={themeMode}>
      <div>
        <Card.Image src={png} />
      </div>
      <Card.Body mode={themeMode}>
        <Card.Title>
          <Typography fontSize="MD" fontWeight="800">
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