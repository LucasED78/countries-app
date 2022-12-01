import React, { useState } from "react";
import { initialValues } from "./typing";

const FiltersContext = React.createContext(initialValues)

export const useFiltersContext = () => React.useContext(FiltersContext)

export const FiltersContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState('')

  return (
    <FiltersContext.Provider value={{
      search,
      setSearch
    }}>
      { children }
    </FiltersContext.Provider>
  )
}