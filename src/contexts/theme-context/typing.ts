export enum EThemeMode {
  Dark = 'dark',
  Light = 'light'
}

export interface IThemeContext {
  themeMode: EThemeMode
  setThemeMode: (theme: EThemeMode) => void
}