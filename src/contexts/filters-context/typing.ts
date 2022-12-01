export const initialValues: IFiltersContext = {
  search: '',
  setSearch: () => null
}

export interface IFiltersContext {
  search: string
  setSearch: (value: string) => void
}