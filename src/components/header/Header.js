import React from 'react'
// components
import { Addressbar } from './Addressbar'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <>
      <header>
        <Addressbar />
        <Navbar />
      </header>
    </>
  )
}
