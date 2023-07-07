import React, { JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../config/routes'
import OwnerManager from '../views/petManager/layout'
import { PublicHome } from '../views/home/PublicHome'
import { PetRecord } from '../views/petManager/petRecord/PetRecord'
import { OwnerHome } from '../views/petManager/home/OwnerHome'
import { AddPetByOwner } from '../views/petManager/addPets/AddPetByOwner'
import { NotFound } from '../views/notFound/NotFound'
import { Vaccine } from '../views/petManager/vaccines/Vaccine'
import { Antiparasitic } from '../views/petManager/antiparasitics/Antiparasitic'

export const ONWER_HOME_TEST = 'bfbf8916-7e5b-4695-9c67-e4a24e3eee16'
const Main = (): JSX.Element => {
  return (
    <Routes>
      <Route path={'*'} element={<NotFound />} />

      <Route path={routes.home} element={<PublicHome />} />
      <Route path={`/owner/:owner_id`} element={<OwnerManager />}>
        <Route path={''} element={<OwnerHome />} />
        <Route path={`pets/:pet_id`} element={<PetRecord />} />
        <Route path={'pets/new'} element={<AddPetByOwner />} />
        <Route path={'pets/vaccines'} element={<Vaccine />} />
        <Route path={'pets/antiparasitic'} element={<Antiparasitic />} />
        <Route path={'pets/chronics'} element={<h1>chronics</h1>} />
      </Route>
    </Routes>
  )
}
export default Main
