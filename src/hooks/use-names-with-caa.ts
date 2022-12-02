import { useEffect } from "react"
import { useCountryMetadataContext } from "../contexts/country-metadata-context"
import { useCountries } from "./use-countries"

export default function useNamesWithCCA() {
  const { namesWithCCA, addNames } = useCountryMetadataContext()
  const keys = Object.keys(namesWithCCA)
  const { data = [] } = useCountries({ skip: keys.length !== 0 })

  useEffect(() => {
    if (!keys.length) {
      addNames(data)
    }
  }, [data])

  return namesWithCCA
}