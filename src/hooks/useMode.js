import { useContext } from "react"
import { ModeContext } from "../context/ModeContext"

export const useMode = () => {
  const context = useContext(ModeContext)

  if (context === undefined) {
    throw new Error("useMode() must be used inside a ModeProvider")
  }

  return context
}