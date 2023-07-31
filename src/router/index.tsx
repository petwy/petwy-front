import React, { JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../config/routes'
import { PublicHome } from '../views/Home/PublicHome'
import { NotFound } from '../views/NotFound'
import OwnerManager from '../views/OwnerManager'
import { OwnerHome } from '../views/OwnerManager/Pets/OwnerHome'
import { PetRecord } from '../views/OwnerManager/Pets/PetRecord'
import { NewPet } from '../views/OwnerManager/Pets/NewPet/NewPet'

const Main = (): JSX.Element => {
  return (
    <Routes>
      <Route path={'*'} element={<NotFound />} />

      <Route path={routes.home} element={<PublicHome />} />
      <Route path={`/owner/:owner_id`} element={<OwnerManager />}>
        <Route path={''} element={<OwnerHome />} />
        <Route path={`pets/:pet_id`} element={<PetRecord />} />
        <Route path={'pets/new'} element={<NewPet />} />
      </Route>
    </Routes>
  )
}
export default Main
