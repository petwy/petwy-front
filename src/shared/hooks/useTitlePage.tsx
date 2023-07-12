import React, { createContext, JSX, useContext, useState } from 'react'

const MY_PETS = 'Mis Mascotas'
interface TitleContextProps {
  titlePage: string
  history: Array<string>
  handleTitlePage: (value: string) => void
  handleBack: () => void
}

export const TitleContext = createContext<TitleContextProps>({
  titlePage: '',
  history: [],
  handleTitlePage: () => {
    return
  },
  handleBack: () => {
    return
  },
})

export const TitleProvider = (props: { children: React.ReactNode }): JSX.Element => {
  const [history, setHistory] = useState<Array<string>>([MY_PETS])
  const { children } = props
  const [titlePage, setTitlePage] = useState<string>(MY_PETS)

  const handleTitlePage = (value: string) => {
    if (value === 'Home') {
      value = MY_PETS
    }
    if (value !== history[history.length - 1]) setHistory([...history, value])
    setTitlePage(value)
  }

  const handleBack = () => {
    if (history.length > 0) {
      const copyHistory = history.splice(0, history.length - 1)
      const last = copyHistory[copyHistory.length - 1]
      setTitlePage(last)
      setHistory(copyHistory)
    }
  }

  return (
    <TitleContext.Provider value={{ titlePage, history, handleTitlePage, handleBack }}>
      {children}
    </TitleContext.Provider>
  )
}

export const useTitlePage = (): TitleContextProps => useContext(TitleContext)
