import "./button.scss"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
}
export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
