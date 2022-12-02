declare interface ICountry {
  idd: {
    root: string
  }
  name: ICountryName
  capital: string
  languages: {
    [key: string]: string
  }
  population: number
  region: string
  subregion: string
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  tld: string
  borders: string[]
  flags: {
    png: string
    svg: string
  }
}

declare interface ICountryName {
  common: string
  official: string
  nativeName: {
    [key: string]: {
      official: string
      common: string
    }
  }
}