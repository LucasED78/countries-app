import React, { useState } from "react";
import { initialValues } from "./country-metadata.types";

const CountryMetadataContext = React.createContext(initialValues)

export const useCountryMetadataContext = () => React.useContext(CountryMetadataContext)

export const CountryMetadataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [namesWithCCA, setNamesWithCCA] = useState<Record<string, string>>({})

  const addNames = (countries: ICountry[]) => {
    const names = countries.reduce((prev, { name: { common }, cca3 }) => {
      return {
        ...prev,
        [cca3]: common
      }
    }, {})

    setNamesWithCCA(names)
  }

  return (
    <CountryMetadataContext.Provider value={{
      namesWithCCA,
      addNames
    }}>
      { children }
    </CountryMetadataContext.Provider>
  )
}