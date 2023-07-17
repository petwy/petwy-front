import React, { JSX, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '../../../shared/components/loadingBar/toolTip/ToolTip'
import { IconUserFilled } from '../../../shared/components/icons/iconUser/IconUserFilled'
import { styles } from '../../../config/styles'
import { useAppMenu } from '../../../shared/hooks/useAppMenu'
import { ButtonBackFilled } from '../../../shared/components/buttons/back/ButtonBackFilled'
import Breadcrumb from '../../../shared/components/breadcrumb/breadcrumb'

export default function HeaderView(): JSX.Element {
  const history = useNavigate()
  const { handleTitlePage, titlePage, breadcrumbs } = useAppMenu()
  useEffect(() => {
    if (!titlePage) handleTitlePage('Mis Mascotas')
  }, [titlePage, handleTitlePage])

  return (
    <div className={'container flex flex-col w-full gap-3 border-b border-b-gray-light py-6'}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className={'flex flex-row justify-between items-center'}>
        <Tooltip content={'Volver atrás'}>
          <ButtonBackFilled
            onHandle={() => {
              history(-1)
            }}
          />
        </Tooltip>
        <h1 className={'title-main text-2xl'}>{titlePage}</h1>
        <Tooltip content={'Ver cuenta'}>
          <button
            onClick={() => {
              console.log('tu cuenta')
            }}
          >
            <IconUserFilled size={styles.icon.size.md} color={'main'} />
          </button>
        </Tooltip>
      </div>
    </div>
  )
}
