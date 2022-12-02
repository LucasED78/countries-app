export type CountryCardDefault = {
  country: ICountry
  onCountryClick: (country: ICountry) => void
}

export type CountryCardWithLoading = {
  country?: ICountry
  loading?: boolean
}

export type CountryCardProps = CountryCardDefault | CountryCardWithLoading