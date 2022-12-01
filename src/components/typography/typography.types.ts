import React from "react"
import { Theme } from "../../theme"

export type TypographyProps = {
  children: React.ReactNode
  fontSize?: keyof Theme['fontSize']
  fontWeight?: '300' | '600' | '800'
  as?: any
}