import React, { JSX, useEffect, useState } from 'react'
import { styles } from '../../../../config/styles'
import { Label } from '../../../../shared/components/label'
import { IEvent } from '../../../../domain/components/appMenu/interfaces/IEvent'
import { countries } from '../../../../data/geography'
import { ErrorMessage, Field } from 'formik'
import { Select } from '../../../../shared/components/select/Select'
import { RadioButtonGroup } from '../../../../shared/components/radioGroup'
import { IdentificationField } from '../../../../shared/components/identificationField'
import { countryIDValidation } from '../../../../shared/validation/identification'
import { countryIDFormat } from '../../../../shared/utils/format/identification'
import { StepProps } from './props'

const IDOptions = [
  { value: 'DNI', label: 'RUT | DNI' },
  { value: 'passport', label: 'Pasaporte' },
]

export const StepOne = (props: StepProps): JSX.Element => {
  const btnStyle = `${styles.button.size.wide} ${styles.opacity['op-80']} ${styles.button.shape.rounded} py-3 px-6`
  const { errors, nextStep } = props
  const { name, surname } = errors
  const [isCompleted, setCompleted] = useState<boolean>(false)
  const [idType, setIDType] = useState<string>('DNI')
  const [validID, setValidID] = useState<boolean>(true)
  const identify = idType === 'DNI' ? 'identification.DNI.DNI' : 'identification.passport.passport'

  const handleIDType = (value: string) => {
    setIDType(value)
  }
  useEffect(() => {
    handleCompletion()
  }, [name, surname, validID])
  const handleCompletion = () => {
    return setCompleted((name === undefined || name === '') && (surname === undefined || surname === '') && validID)
  }
  const handleIDValidation = (value: string): boolean => {
    const validated = countryIDValidation('Chile', value, idType)
    setValidID(validated)
    return validated
  }
  const handleIDFormat = (value: string): string => {
    return countryIDFormat('Chile', value, idType)
  }
  const handleNextStep = (e: IEvent) => {
    e.preventDefault()
    if (nextStep) {
      nextStep()
    }
  }
  return (
    <div className={'flex flex-col gap-6'}>
      <div className={'text-justify px-3 py-2'}>
        <p className={'text-main italic text-md'}>
          {'Ingresa tus datos, una vez que te registres te enviaremos un correo ' +
            'electrónico para validar tu cuenta. Ahí podrás crear tu contraseña'}
        </p>
      </div>

      <div className={'flex flex-col gap-3'}>
        <div className={styles['form-block'].normal}>
          <Label name={'name'} text={'Nombre'} />
          <Field id={'name'} name={'name'} placeholder={'Tu nombre'} className={styles['input-box'].main} />
          <ErrorMessage component={'a'} className={styles.text.error} name={'name'} />
        </div>
        <div className={styles['form-block'].normal}>
          <Label name={'surname'} text={'Apellido'} />
          <Field id={'surname'} name={'surname'} placeholder={'Tu apellido'} className={styles['input-box'].main} />
          <ErrorMessage component={'a'} className={styles.text.error} name={'surname'} />
        </div>

        <div className="flex flex-col gap-3">
          <div className={styles['form-block'].normal}>
            <Label name={'identify'} text={'Digita tu número de documento'} />
            <IdentificationField
              name={identify}
              className={styles['input-box'].main}
              key={identify}
              placeholder={idType === 'DNI' ? '7.777.777-7' : 'F12345678'}
              errorMessage={'El RUT ingresado no es válido'}
              validation={handleIDValidation}
              format={handleIDFormat}
            />
          </div>
          <div className={styles['form-block'].normal}>
            <Label name={'identify'} text={'País de emisión de tu documento'} />
            <div>
              <Select data={countries} name={`identification.${idType}.country`} />
            </div>
          </div>
          <Label name={'identify'} text={'Selecciona el tipo de identificación'} />
          <RadioButtonGroup onChange={handleIDType} options={IDOptions} initialValue={'DNI'} />
        </div>
      </div>

      <div className={'FOOTER'}>
        <button
          className={`${btnStyle} ${isCompleted ? styles.button.color.dark : styles.button.color.disable}`}
          // disabled={!isCompleted}
          onClick={(e) => handleNextStep(e as unknown as IEvent)}
        >
          {'siguiente'}
        </button>
      </div>
    </div>
  )
}
