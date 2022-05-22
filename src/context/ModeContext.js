import { createContext, useReducer } from 'react'

export const ModeContext = createContext()

const modeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload }
    default:
      return state
  }
}

export function ModeProvider({ children }) {
  const [state, dispatch] = useReducer(modeReducer, {
    mode: 'dark'
  })

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode })
  }

  return (
    <ModeContext.Provider value={{...state, changeMode}}>
      {children}
    </ModeContext.Provider>
  )
}