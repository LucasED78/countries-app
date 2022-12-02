import useSWR from "swr";
import { fetchCountries } from "../services/country";
import { ERegion } from "../typing";

type UseCountriesArgs = {
  search?: string
  region?: ERegion
  skip?: boolean
}

export function useCountries(args: UseCountriesArgs) {
  const {
    search,
    region,
    skip
  } = args
  let url = 'https://restcountries.com/v3.1/all';

  if (search) url = `https://restcountries.com/v3.1/name/${search}`
  if (region) url = `https://restcountries.com/v3.1/region/${region}`

  const { data, error } = useSWR(skip ? null : url, fetchCountries)

  return {
    data,
    isLoading: !data && !error && !skip,
    error
  }
}