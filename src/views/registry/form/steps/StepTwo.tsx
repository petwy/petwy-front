import React, { JSX, useEffect, useState } from 'react'
import { Label } from '../../../../shared/components/label'
import { Select } from '../../../../shared/components/select/Select'
import { IEvent } from '../../../../domain/components/appMenu/interfaces/IEvent'
import { styles } from '../../../../config/styles'
import { StepProps } from './props'
import { phoneCodes } from '../../../../data/phone'
import { ErrorMessage, Field } from 'formik'
import { blockCopy } from '../../../../shared/utils/blockCopy'

export const StepTwo = (props: StepProps): JSX.Element => {
  const btnStyle = `${styles.button.size.wide} ${styles.opacity['op-80']} ${styles.button.shape.rounded} py-3 px-6`
  const { errors, prevStep, nextStep } = props
  const { email, emailConfirmed, phone } = errors
  const number = phone !== undefined ? phone.number : ''
  const [isCompleted, setCompleted] = useState<boolean>(false)

  useEffect(() => {
    handleCompletion()
  }, [email, emailConfirmed, number])
  const handleCompletion = () => {
    return setCompleted(
      (email === undefined || email === '') &&
        (emailConfirmed === undefined || emailConfirmed === '') &&
        (number === undefined || number === '')
    )
  }
  const handleNextStep = (e: IEvent) => {
    e.preventDefault()
    if (nextStep) {
      nextStep()
    }
  }
  const handlePrevStep = (e: IEvent) => {
    e.preventDefault()
    if (prevStep) {
      prevStep()
    }
  }
  return (
    <div className={'flex flex-col gap-6'}>
      <div className={'text-justify px-3 py-2'}>
        <p className={'text-main italic'}>
          {'Utilizaremos tus datos con cuidado. Solo nos pondremos en contacto contigo en casos ' +
            'exclusivamente relacionados con el bienestar de tu mascota o cuando tu lo necesites.'}
        </p>
      </div>
      <div className={styles['form-block'].normal}>
        <div className={styles['form-block'].normal}>
          <Label name={'email'} text={'Correo electrónico'} />
          <p className={'text-main italic'}>Este será tu usuario para ingresar a nuestra aplicación</p>
          <Field
            name={'email'}
            placeholder={'example@petwy.io'}
            className={styles['input-box'].main}
            onPaste={blockCopy}
          />
          <ErrorMessage component={'a'} className={styles.text.error} name={'email'} />
        </div>
        <div className={styles['form-block'].normal}>
          <Label name={'email_confirmed'} text={'Ingresa tu Correo electrónico nuevamente'} />
          <Field
            name={'email_confirmed'}
            placeholder={'example@petwy.io'}
            className={styles['input-box'].main}
            onPaste={blockCopy}
          />
          <ErrorMessage component={'a'} className={styles.text.error} name={'email_confirmed'} />
        </div>
        <div className={styles['form-block'].normal}>
          <Label name="phone" text="Teléfono" />
          <div className="flex gap-5">
            <Select name={'phone.code'} options={phoneCodes} />
            <Field name={'phone.number'} placeholder={'99999999'} className={styles['input-box'].main} />
          </div>
          <ErrorMessage component={'a'} className={styles.text.error} name={'phone.number'} />
        </div>
      </div>
      <div className={'flex flex-row gap-3'}>
        <button
          className={`${btnStyle} ${styles.button.color.dark}`}
          onClick={(e) => handlePrevStep(e as unknown as IEvent)}
        >
          {'volver'}
        </button>
        <button
          className={`${btnStyle} ${isCompleted ? styles.button.color.dark : styles.button.color.disable}`}
          // disabled={!isCompleted}
          onClick={(event) => handleNextStep(event as unknown as IEvent)}
        >
          {'siguiente'}
        </button>
      </div>
    </div>
  )
}
