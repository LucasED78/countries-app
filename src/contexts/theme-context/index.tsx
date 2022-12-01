import React, { useState } from "react";
import { EThemeMode, IThemeContext } from "./typing";

const initialValues: IThemeContext = {
  themeMode: EThemeMode.Light,
  setThemeMode: () => null
}

const ThemeContext = React.createContext<IThemeContext>(initialValues)

export const useThemeContext = () => React.useContext(ThemeContext)

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState(initialValues.themeMode)

  console.log(themeMode);
  

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      { children }
    </ThemeContext.Provider>
  )
}