import React, { JSX } from 'react'
import { Form, Formik, FormikHelpers, FormikProps } from 'formik'
import { StepOne } from './steps/StepOne'
import { StepTwo } from './steps/StepTwo'
import { StepThree } from './steps/StepThree'
import { OwnerRegistry } from '../../../domain/entities/owners/ownerRegistry'
import { ownerRegistrySchema } from '../../../shared/validation/schema/OwnerRegistry'
import { useStep } from '../../../shared/hooks/useStep'
import { createOwner } from '../../../adapters/redux/thunks/owner'
import { AppDispatch } from '../../../adapters/redux/store'
import { useDispatch } from 'react-redux'
import { isLoading } from '../../../adapters/redux/features/owners/ownerSlice'

const ownerRegistryInitialState: OwnerRegistry = {
  name: '',
  surname: '',
  email: '',
  email_confirmed: '',
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
  phone: {
    code: '',
    number: '',
  },
  address: {
    street: '',
    street_additional: '',
    city: '',
    state: '',
    country: '',
    post_code: '',
  },
}
export const FormOwnerRegistry = (props: { hide: () => void }): JSX.Element => {
  const { hide } = props
  const dispatch = useDispatch<AppDispatch>()
  const { step, prevStep, nextStep } = useStep()

  const onSubmit = async (registry: OwnerRegistry, formikHelpers: FormikHelpers<OwnerRegistry>) => {
    hide()
    const { resetForm } = formikHelpers
    dispatch(createOwner(registry))
    dispatch(isLoading())
    resetForm()
  }
  const showSteps = (errors: any, isValid: boolean): JSX.Element => {
    switch (step) {
      case 1:
        return <StepOne nextStep={nextStep} errors={errors} />
      case 2:
        return <StepTwo nextStep={nextStep} prevStep={prevStep} errors={errors} />
      case 3:
        return <StepThree prevStep={prevStep} errors={errors} isValid={isValid} />
      default:
        return <></>
    }
  }

  return (
    <Formik
      initialValues={ownerRegistryInitialState}
      onSubmit={onSubmit}
      validationSchema={ownerRegistrySchema}
      enableReinitialize={true}
    >
      {(formik: FormikProps<OwnerRegistry>) => {
        return (
          <Form className={'flex flex-col gap-3 h-screen max-h-screen md:h-[90vh] p-3'}>
            {showSteps(formik.errors, formik.isValid)}
          </Form>
        )
      }}
    </Formik>
  )
}
