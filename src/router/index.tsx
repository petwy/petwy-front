import React, { JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import { OwnerRegistry } from '../views/registry/OwnerRegistry'
import { routes } from '../domain/routes'
import OwnerManager from '../views/manager/OwnerManager'
import { ownerData } from '../data'
import { PublicHome } from '../views/home/PublicHome'

const Main = (): JSX.Element => {
  return (
    <Routes>
      <Route path={routes.home} element={<PublicHome />} />
      <Route path={routes.owners.register} element={<OwnerRegistry />} />
      <Route path={routes.owners.manager} element={<OwnerManager owner={ownerData} />} />
    </Routes>
  )
}
export default Main
