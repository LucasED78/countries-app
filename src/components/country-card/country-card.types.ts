export type CountryCardDefault = {
  country: ICountry
}

export type CountryCardWithLoading = {
  country?: ICountry
  loading?: boolean
}

export type CountryCardProps = CountryCardDefault | CountryCardWithLoading