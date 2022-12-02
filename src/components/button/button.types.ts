import { ButtonHTMLAttributes } from "react"
import { Theme } from "../../theme"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  prefixIcon?: JSX.Element
  padding?: keyof Theme['button']['padding']
}