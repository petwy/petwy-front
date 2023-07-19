import React, { JSX } from 'react'
import Main from '../../router'
import { Toaster } from 'sonner'

function App(): JSX.Element {
  return (
    <div className="bg-white h-screen text-main font-monserrat">
      <Main />
      <Toaster richColors={true} />
    </div>
  )
}

export default App
