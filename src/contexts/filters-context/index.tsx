import React, { useState } from "react";
import { ERegion } from "../../typing";
import { initialValues } from "./typing";

const FiltersContext = React.createContext(initialValues)

export const useFiltersContext = () => React.useContext(FiltersContext)

export const FiltersContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState<ERegion | undefined>()

  return (
    <FiltersContext.Provider value={{
      search,
      setSearch,
      region,
      setRegion
    }}>
      { children }
    </FiltersContext.Provider>
  )
}