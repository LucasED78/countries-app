import Skeleton from 'react-loading-skeleton'
import { useCountryMetadataContext } from '../../../../contexts/country-metadata-context'
import Button from '../../../button'
import Typography from '../../../typography'
import * as css from './borders-section.styles'
import { BordersSectionProps } from './borders-section.types'

const BordersSection: React.FC<BordersSectionProps> = ({
  borders,
  onBorderClick,
  loading
}) => {
  const { namesWithCCA } = useCountryMetadataContext()

  if (loading) return <Skeleton width="100%" height="40px" />
  if (!borders.length) return <></>

  return (
    <css.BordersContainer>
      <Typography fontSize='XS' fontWeight='600' as="span" lineHeight='XL'>
        Border Countries: {' '}
      </Typography>
      <css.BordersContent>
        {
          borders.map(border => (
            <Button key={border} padding='SM' onClick={() => onBorderClick(border)}>
              <Typography fontSize="XXS" lineHeight='XL'>
                { namesWithCCA[border] }
              </Typography>
            </Button>
          ))
        }
      </css.BordersContent>
    </css.BordersContainer>
  )
}

export default BordersSection