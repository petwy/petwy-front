import React, { JSX } from 'react'
import { Tooltip } from '../../../shared/components/loadingBar/toolTip/ToolTip'
import { IconPrintFilled } from '../../../shared/components/icons/iconPrint/IconPrintFilled'
import { IconDownloadFilled } from '../../../shared/components/icons/iconDownload/IconDownloadFilled'
import { IconCertificateFilled } from '../../../shared/components/icons/iconCertificate/IconCertificateFilled'
import { styles } from '../../../config/styles'
import { MenuPetProps } from './props'
import { IconActiveFilled } from '../../../shared/components/icons/iconActive/IconActiveFilled'
import { IconDisableFilled } from '../../../shared/components/icons/iconDisable/IconDisableFilled'
import { IconLostFilled } from '../../../shared/components/icons/iconLost/IconLostFilled'

const menu = [
  {
    toolTipTitle: 'Imprime la ficha de tu mascota',
    icon: <IconPrintFilled color={'main'} size={styles.icon.size.md} />,
  },
  {
    toolTipTitle: 'Descarga la ficha de tu mascota',
    icon: <IconDownloadFilled color={'main'} size={styles.icon.size.md} />,
  },
  {
    toolTipTitle: 'Confecciona una ficha de tu mascota para certificar, en caso de viajes al extranjero',
    icon: <IconCertificateFilled color={'main'} size={styles.icon.size.md} />,
  },
  {
    toolTipTitle:
      'Declarar perdida. Notificaremos a usuarios cercanos a tu ubicación la pérdida de tu mascota para ayudar a encontrarla',
    icon: <IconLostFilled color={'error'} size={styles.icon.size.md} />,
  },
]
export const PetRecordMenu = (props: MenuPetProps): JSX.Element => {
  const { name, isEnable } = props

  const petName = (): JSX.Element => {
    return (
      <div className={'flex flex-row gap-2 items-center'}>
        {isEnable ? (
          <Tooltip content={'Tu mascota está activa'}>
            <IconActiveFilled size={styles.icon.size.sm} color={'success'} />
          </Tooltip>
        ) : (
          <Tooltip content={'Tu mascota está inactiva'}>
            <IconDisableFilled size={styles.icon.size.sm} color={'error'} />
          </Tooltip>
        )}
        <h1 className={styles.text['main-title']}>{name} </h1>
      </div>
    )
  }
  return (
    <div className={'flex flex-row justify-between items-center gap-3'}>
      {petName()}
      <div className={'flex flex-row justify-end gap-3'}>
        {menu.map((m, index) => (
          <Tooltip key={index} content={m.toolTipTitle}>
            {m.icon}
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
