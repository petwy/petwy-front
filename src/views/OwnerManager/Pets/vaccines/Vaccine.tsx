import React, { JSX } from 'react'
import { IVaccine } from '../../../../domain/entities/IVaccine'
import { toDate } from '../../../../shared/utils/format/dates'
import { dateViewer, isBefore } from '../../../../shared/utils/ageCalc'
import { styles } from '../../../../config/styles'
import { ActiveIcon, AlertIcon, EditIcon } from '../../../../shared/components/icons'
import { toCapitalize } from '../../../../shared/utils'

export const dummy = [
  {
    name: 'Simona',
    vaccines: [
      {
        name: 'Rabia',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2023/04/28'),
        valid_from: toDate('2023/04/28'),
        valid_until: toDate('2023/07/01'),
        is_enable: true,
      },
      {
        name: 'Octuple',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2023/04/28'),
        valid_from: toDate('2023/04/28'),
        valid_until: toDate('2026/07/01'),
        is_enable: true,
      },
      {
        name: 'Ecchinococcus',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2023/04/28'),
        valid_from: toDate('2023/04/28'),
        valid_until: toDate('2026/07/01'),
        is_enable: true,
      },
    ] as Array<IVaccine>,
  },
  {
    name: 'Kiara',
    vaccines: [
      {
        name: 'Rabia',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2023/04/28'),
        valid_from: toDate('2023/04/28'),
        valid_until: toDate('2026/07/01'),
        is_enable: true,
      },
      {
        name: 'Rabia',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2022/04/18'),
        valid_from: toDate('2022/04/18'),
        valid_until: toDate('2023/04/18'),
        is_enable: false,
      },
      {
        name: 'Triple Felina',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2023/04/28'),
        valid_from: toDate('2023/04/28'),
        valid_until: toDate('2026/07/01'),
        is_enable: true,
      },
      {
        name: 'Ecchinococcus',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2023/04/28'),
        valid_from: toDate('2023/04/28'),
        valid_until: toDate('2026/07/01'),
        is_enable: true,
      },
    ] as Array<IVaccine>,
  },
  {
    name: 'Olivia',
    vaccines: [
      {
        name: 'Rabia',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2023/04/28'),
        valid_from: toDate('2023/04/28'),
        valid_until: toDate('2026/07/01'),
        is_enable: true,
      },
      {
        name: 'Octuple',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2023/04/28'),
        valid_from: toDate('2023/04/28'),
        valid_until: toDate('2026/07/01'),
        is_enable: true,
      },
      {
        name: 'Ecchinococcus',
        commercial_name: 'versiguard',
        manufacturer: 'zoetis',
        batch: '585829A03',
        vaccination_date: toDate('2023/04/28'),
        valid_from: toDate('2023/04/28'),
        valid_until: toDate('2026/07/01'),
        is_enable: true,
      },
    ] as Array<IVaccine>,
  },
]

export const Vaccine = (): JSX.Element => {
  const VaccineHeader: React.FC<{ name: string; title: string; has_alert: boolean; is_editable: boolean }> = ({
    name,
    title,
    has_alert,
    is_editable,
  }) => {
    return (
      <>
        <h1 className={`${styles.text['main-title']}`}>{name}</h1>
        <div className={'vaccine-options flex flex-row gap-3 justify-between px-3 items-center'}>
          <h2 className={`${styles.text.title}`}>{title}</h2>
          {is_editable && <EditIcon />}
        </div>
        {has_alert && is_editable && <VaccineAlert value={name} />}
      </>
    )
  }
  const VaccineAlert: React.FC<{ value: string }> = ({ value }) => {
    const name = toCapitalize(value)
    return (
      <div className={'vaccine-alert p-6 bg-error-light bg-opacity-20 text-error rounded-xl'}>
        <p>{`Tienes una vacuna pendiente. Agenda una cita al veterinario para poner al día a ${name}.`}</p>
      </div>
    )
  }
  const VaccineTable: React.FC<{ vaccines: Array<IVaccine>; is_stateful: boolean }> = ({ vaccines, is_stateful }) => {
    return (
      <div className={'border rounded-xl p-2 w-full h-fit'}>
        <table className="w-full">
          <thead className="text-main ">
            <tr className={'border-b'}>
              <th className="py-2 px-2 text-left ml-6">Vacuna</th>
              <th className="py-2 px-2 font-normal">Nombre de la Vacuna</th>
              <th className="py-2 px-2 font-normal">Lote</th>
              <th className="py-2 px-2 font-normal">Fabricante</th>
              <th className="py-2 px-2 font-normal">Fecha de Aplicación</th>
              <th className="py-2 px-2 font-normal">Fecha de Fabricación</th>
              <th className="py-2 px-2 font-normal">Fecha de Expiración</th>
              {is_stateful && <th className="py-2 px-2 font-normal">Estado</th>}
            </tr>
          </thead>

          <tbody>
            {vaccines.map((v) => (
              <tr key={v.name} className={'text-center'}>
                <th className="border-b text-md text-left pl-6">{v.name}</th>
                <th className="py-2 border-b text-md font-normal">{toCapitalize(v.commercial_name)}</th>
                <th className="py-2 border-b text-md font-normal">{v.batch}</th>
                <th className="py-2 border-b text-md font-normal">{v.manufacturer.toUpperCase()}</th>
                <th className="py-2 border-b text-md font-normal">{dateViewer(v.vaccination_date.toString())}</th>
                <th className="py-2 border-b text-md font-normal">{dateViewer(v.valid_from.toString())}</th>
                <th className="py-2 border-b text-md font-normal">{dateViewer(v.valid_until.toString())}</th>
                {is_stateful && (
                  <th className="py-2 border-b text-md">
                    {isBefore(v.valid_until) ? (
                      <span className={'flex w-full justify-center'}>
                        <ActiveIcon className={'text-success'} />
                      </span>
                    ) : (
                      <span className={'flex w-full justify-center animate-blink'}>
                        <AlertIcon className={'text-error'} />
                      </span>
                    )}
                  </th>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div className={'flex flex-col gap-6'}>
      {dummy.map((p, index) => {
        return (
          <div key={`${p.name}-${index}`} className={'flex flex-col gap-3 pb-3'}>
            <VaccineHeader name={p.name} has_alert={true} title={'Vacunas actuales'} is_editable={true} />
            <VaccineTable vaccines={p.vaccines.filter((v) => v.is_enable)} is_stateful={true} />
            {p.vaccines.filter((v) => !v.is_enable).length > 0 && (
              <>
                <VaccineHeader name={p.name} has_alert={true} title={'Vacunas históricas'} is_editable={false} />
                <VaccineTable vaccines={p.vaccines.filter((v) => !v.is_enable)} is_stateful={false} />
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
