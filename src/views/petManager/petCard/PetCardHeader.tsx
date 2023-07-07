import React, { JSX } from 'react'
import { Tag } from '../../../shared/components/tag/Tag'
import { toCapitalize } from '../../../shared/utils'
import { Level } from '../../../shared/components/tag/props'
import { Tooltip } from '../../../shared/components/loadingBar/toolTip/ToolTip'
import { IconSterilisedFilled } from '../../../shared/components/icons/iconSterilised/IconSterilisedFilled'
import { IconChipFilled } from '../../../shared/components/icons/iconChip/IconChipFilled'
import { PetCardHeaderProps } from './props'
import { styles } from '../../../config/styles'

export const PetCardHeader = (props: PetCardHeaderProps): JSX.Element => {
  const { chronics, isSterilised, isChipped } = props
  const petIconsView = (): JSX.Element => {
    return (
      <div className={'flex flex-row gap-2'}>
        {isSterilised ? (
          <Tooltip content={'Tu mascota está esterilizada'}>
            <IconSterilisedFilled size={styles.icon.size.sm} color={'main-light'} />
          </Tooltip>
        ) : null}
        {isChipped ? (
          <Tooltip content={'Tu mascota tiene microchip'}>
            <IconChipFilled size={styles.icon.size.sm} color={'main-light'} />
          </Tooltip>
        ) : null}
      </div>
    )
  }
  return (
    <div className={'flex flex-row gap-3 justify-between items-center'}>
      {petIconsView()}

      <div className={'flex flex-row gap-2'}>
        {chronics ? (
          chronics.map((c) => (
            <Tooltip key={c.name} content={toCapitalize(c.name)}>
              <Tag label={toCapitalize(c.name)} level={Level.WARNING} />
            </Tooltip>
          ))
        ) : (
          <Tooltip content={'Estas son las enfermedades que debes tener mayor cuidado'}>
            <Tag key={'normal'} label={'Sin Patologías'} level={Level.NONE} />
          </Tooltip>
        )}
      </div>
    </div>
  )
}
