import React, { JSX } from 'react'
import { Label } from '../../../../shared/components/label'
import { Select } from '../../../../shared/components/select/Select'
import { IEvent } from '../../../../domain/components/appMenu/interfaces/IEvent'
import { StepThreeProps } from './props'
import { styles } from '../../../../config/styles'
import { countries } from '../../../../data/geography'
import { regions } from '../../../../data/geography/chile'
import { ErrorMessage, Field } from 'formik'

export const StepThree = (props: StepThreeProps): JSX.Element => {
  const btnStyle = `${styles.button.size.wide} ${styles.opacity['op-80']} ${styles.button.shape.rounded} py-3 px-6`
  const { errors, isValid, prevStep } = props

  const handlePrevStep = (e: IEvent) => {
    e.preventDefault()
    if (prevStep) {
      prevStep()
    }
  }
  return (
    <div className={'flex flex-col gap-6'}>
      <div className={styles['form-block'].normal}>
        <Label name="address" text="Dirección actual" />
        <div className={styles['form-block'].normal}>
          <Label name={'address.country'} text={'País'} />
          <Select name="address.country" data={countries} />
        </div>
        <div className={styles['form-block'].normal}>
          <Label name={'address.street'} text={'Calle'} />
          <Field name={'address.street'} placeholder={'Av Libertad 555'} className={styles['input-box'].main} />
          <ErrorMessage component={'a'} className={styles.text.error} name={'address.street'} />
        </div>
        <div className={styles['form-block'].normal}>
          <Label name={'address.street_additional'} text={'Complemento'} />
          <Field
            name={'address.street_additional'}
            placeholder={'departamento 101'}
            className={styles['input-box'].main}
          />
          <ErrorMessage component={'a'} className={styles.text.error} name={'address.street_additional'} />
        </div>
        <div className={styles['form-block'].normal}>
          <Label name={'address.city'} text={'Ciudad'} />
          <Field name={'address.city'} placeholder={'Viña del Mar'} className={styles['input-box'].main} />
          <ErrorMessage component={'a'} className={styles.text.error} name={'address.city'} />
        </div>
        <div className={styles['form-block'].normal}>
          <Label name={'address.state'} text={'Estado, Provincia o Región'} />
          <Select name={'address.state'} data={regions} />
        </div>
        <div className={styles['form-block'].normal}>
          <Label name="address.post_code" text="Código Postal" />
          <Field name="address.post_code" placeholder={'2520000'} className={styles['input-box'].main} />
          <ErrorMessage component={'a'} className={styles.text.error} name={'address.post_code'} />
        </div>
      </div>
      <div className={'flex flex-row gap-3'}>
        <button
          className={`${btnStyle} ${styles.button.color.dark}`}
          onClick={(e) => handlePrevStep(e as unknown as IEvent)}
        >
          {'Volver'}
        </button>
        <button type={'submit'} className={`${btnStyle} ${styles.button.color.disable}`}>
          {'Registrar'}
        </button>
      </div>
    </div>
  )
}
