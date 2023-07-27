import React, { JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../config/routes'
import { PublicHome } from '../views/home/PublicHome'
import { NotFound } from '../views/NotFound'
import OwnerManager from '../views/OwnerManager/Pets'
import { OwnerHome } from '../views/OwnerManager/Pets/OwnerHome'
import { PetRecord } from '../views/OwnerManager/Pets/PetRecord'
import { NewPet } from '../views/OwnerManager/Pets/NewPet/NewPet'
import { Vaccine } from '../views/OwnerManager/Pets/vaccines/Vaccine'
import { Antiparasitic } from '../views/OwnerManager/Pets/Antiparasitic/Antiparasitic'

const Main = (): JSX.Element => {
  return (
    <Routes>
      <Route path={'*'} element={<NotFound />} />

      <Route path={routes.home} element={<PublicHome />} />
      <Route path={`/owner/:owner_id`} element={<OwnerManager />}>
        <Route path={''} element={<OwnerHome />} />
        <Route path={`pets/:pet_id`} element={<PetRecord />} />
        <Route path={'pets/new'} element={<NewPet />} />

        {/*<Route path={'pets/vaccines'} element={<Vaccine />} />*/}
        {/*<Route path={'pets/antiparasitic'} element={<Antiparasitic />} />*/}
        {/*<Route path={'pets/chronics'} element={<h1>chronics</h1>} />*/}
      </Route>
    </Routes>
  )
}
export default Main
