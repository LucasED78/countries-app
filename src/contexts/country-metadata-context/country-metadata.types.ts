export const initialValues = {
  namesWithCCA: {},
  addNames: () => null
} as ICountryMetadataContext

export interface ICountryMetadataContext {
  namesWithCCA: Record<string, string>,
  addNames: (data: ICountry[]) => void
}