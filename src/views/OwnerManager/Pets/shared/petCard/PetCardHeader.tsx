import React, { JSX } from 'react'
import { Tag } from '../../../../../shared/components/tag/Tag'
import { toCapitalize } from '../../../../../shared/utils'
import { Level, TagLevel } from '../../../../../shared/components/tag/props'
import { Tooltip } from '../../../../../shared/components/loadingBar/toolTip/ToolTip'
import { IconSterilisedFilled } from '../../../../../shared/components/icons/iconSterilised/IconSterilisedFilled'
import { IconChipFilled } from '../../../../../shared/components/icons/iconChip/IconChipFilled'
import { styles } from '../../../../../config/styles'
import { PetChronic } from './PetCard'
import { ActiveIcon, SterilisedIcon } from '../../../../../shared/components/icons'
import { IconActiveFilled } from '../../../../../shared/components/icons/iconActive/IconActiveFilled'

interface PetCardHeaderProps {
  isActive: boolean
  isSterilised: boolean
  isChipped: boolean
  chronics: Array<PetChronic>
}

export const PetCardHeader: React.FC<PetCardHeaderProps> = ({
  isActive,
  chronics,
  isSterilised,
  isChipped,
}): JSX.Element => {
  const petIconsView = (): JSX.Element => {
    return (
      <div className={'flex flex-row gap-2'}>
        {isSterilised ? (
          <Tooltip content={'Tu mascota está esterilizada'}>
            <SterilisedIcon className={'text-white-abs bg-success rounded-full h-6 w-6 p-1'} />
            {/*<IconSterilisedFilled size={styles.icon.size.sm} color={'success'} />*/}
          </Tooltip>
        ) : null}
        {isChipped ? (
          <Tooltip content={'Tu mascota tiene microchip'}>
            <IconChipFilled size={styles.icon.size.sm} color={'success'} />
          </Tooltip>
        ) : null}
      </div>
    )
  }
  return (
    <div className={'flex flex-row gap-3 justify-between items-center'}>
      <div className={'flex flex-row gap-2 items-center'}>
        {isActive ? (
          <Tooltip content={'Tu mascota está activa'}>
            <IconActiveFilled size={'w-6 h-6'} color={'success'} />
          </Tooltip>
        ) : null}
        {petIconsView()}
      </div>
      <div className={'flex flex-row gap-2'}>
        {chronics ? (
          chronics.map((c) => (
            <Tooltip key={c.name} content={c.detail}>
              <Tag label={toCapitalize(c.name)} level={c.severity as TagLevel} />
            </Tooltip>
          ))
        ) : (
          <Tooltip content={'Estas son las enfermedades que debes tener mayor cuidado'}>
            <Tag key={'normal'} label={'Sin Patologías'} level={'none'} />
          </Tooltip>
        )}
      </div>
    </div>
  )
}
