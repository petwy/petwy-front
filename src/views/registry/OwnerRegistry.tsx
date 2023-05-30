import React, { JSX, useState } from 'react'
import { useDispatch } from 'react-redux'
import { OwnerRegistry } from '../../domain/entities/owners/registrationForm'
import { Event } from '../../adapters/web/html'
import { addOwner } from '../../adapters/redux/features/owner'
import Label from '../../components/shared/label'
import Input from '../../components/shared/input'
import Select from '../../components/shared/select'
import { regions } from '../../data'

const ownerStateInitial: OwnerRegistry = {
  name: '',
  surname: '',
  email: '',
  identification: {
    DNI: {
      DNI: '',
      country: '',
    },
    passport: {
      passport: '',
      country: '',
    },
  },
  username: '',
  address: {
    street: '',
    city: '',
    state: '',
    country: '',
    post_code: '',
  },
  phone: {
    code: 0,
    phone: 0,
  },
}
export function OwnerRegistry(): JSX.Element {
  const [ownerRegistry, setOwnerRegistry] = useState<OwnerRegistry>(ownerStateInitial)
  const dispatch = useDispatch()
  const handleChange = (event: Event) => {
    console.log({ [event.target.name]: event.target.value })
    setOwnerRegistry({
      ...ownerRegistry,
      [event.target.name]: event.target.value,
    })
  }
  const handleUsername = (event: Event) => {
    console.log({ [event.target.name]: event.target.value })
    setOwnerRegistry({
      ...ownerRegistry,
      [event.target.name]: event.target.value,
      username: event.target.value,
    })
  }
  const handlerSubmit = (event: any) => {
    event.preventDefault()
    dispatch(addOwner(''))
  }
  return (
    <div className="max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-gray-100">
      <div className="bg-white">
        <form className="p-4">
          {/* User Information */}
          <h1 className="title-primary-700 text-2xl my-5 font-bold">Ingresa tus datos</h1>
          <div className={'text-justify px-3 py-2 mb-4'}>
            <p className={'text-main italic text-sm'}>
              {'Ingresa tus datos, una vez que te registres te enviaremos un correo ' +
                'electrónico para validar tu cuenta. Ahí podrás crear tu contraseña'}
            </p>
          </div>
          <div className="mb-4">
            <Label name={'name'} text={'Nombre'} />
            <Input name={'name'} typeInput={'text'} placeholder={'Alex'} handler={handleChange} />
          </div>
          <div className="mb-4">
            <Label name={'surname'} text={'Apellido'} />
            <Input name={'surname'} typeInput={'text'} placeholder={'Figueyes'} handler={handleChange} />
          </div>
          {/* User Contact */}
          <div className="mb-4">
            <Label name={'email'} text={'Correo electrónico'} />
            <Input name={'email'} typeInput={'email'} placeholder={'example@petwy.io'} handler={handleUsername} />
          </div>

          <div className="mb-4">
            <Label name="phone" text="Telefono" />
            <div className="flex gap-5">
              <Select name={'phone.code'} data={['+56']} width={'w-20'} />
              <Input name={'phone'} typeInput={'phone'} />
            </div>
          </div>

          {/* User Identification */}
          <div className="mb-4">
            <Label name={'identify'} text={'RUT o Pasaporte'} />
            <div className="flex gap-5">
              <Select name={'identification'} data={['DNI | RUT', 'Pasaporte']} width={'w-40'} />
              <Input name={'identification'} typeInput={'text'} handler={handleChange} />
            </div>
          </div>
          {/* User Address */}
          <div className="mb-4">
            <Label name="address" text="Dirección actual" />
            <div className={'mb-4'}>
              <Label name={'address.country'} text={'País'} />
              <Select name="address.country" data={['Chile']} />
            </div>
            <div className={'mb-4'}>
              <Label name={'address.street'} text={'Calle'} />
              <Input
                name={'address.street'}
                typeInput={'text'}
                placeholder={'Av Libertad 555'}
                handler={handleChange}
              />
            </div>
            <div className={'mb-4'}>
              <Label name={'address.city'} text={'Ciudad'} />
              <Input name={'address.city'} typeInput={'text'} placeholder={'Viña del Mar'} handler={handleChange} />
            </div>
            <div className={'mb-4'}>
              <Label name={'address.state'} text={'Estado, Provincia o Región'} />
              <Select name={'address.state'} data={regions} />
            </div>
            <div className={'mb-4'}>
              <Label name="address.post_code" text="Código Postal" />
              <Input name="address.post_code" typeInput="text" handler={handleChange} />
            </div>
          </div>
          <div className={'text-justify px-3 py-2 mb-4'}>
            <p className={'text-main text-sm italic'}>
              {'Utilizaremos tus datos con cuidado. Solo nos pondremos en contacto contigo en casos ' +
                'exclusivamente relacionados con el bienestar de tu mascota o cuando tu lo necesites.'}
            </p>
          </div>
          <button className={'w-full bg-main hover:bg-main-700 text-white px-4 py-2 rounded'} onSubmit={handlerSubmit}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  )
}
