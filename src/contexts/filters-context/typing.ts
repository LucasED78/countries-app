import { ERegion } from "../../typing"

export const initialValues: IFiltersContext = {
  search: '',
  setSearch: () => null,
  setRegion: () => null,
}

export interface IFiltersContext {
  search: string
  setSearch: (value: string) => void
  region?: ERegion
  setRegion: (value?: ERegion) => void
}