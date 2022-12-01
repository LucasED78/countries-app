import useSWR from "swr";
import { fetchCountries } from "../services/country";

type UseCountriesArgs = {
  search?: string
}

export function useCountries(args: UseCountriesArgs) {
  const {
    search
  } = args
  let url = 'https://restcountries.com/v3.1/all';

  if (search) url = `https://restcountries.com/v3.1/name/${search}`

  const { data, error } = useSWR(url, fetchCountries)

  return {
    data,
    isLoading: !data && !error,
    error
  }
}