export type SelectItem = {
  label: string
  value: string
}

export type SelectProps = {
  placeholder: string
  items: SelectItem[]
  value?: string
  onSelect: (item: SelectItem) => void
}