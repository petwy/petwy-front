import React, { JSX, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '../../../../shared/components/loadingBar/toolTip/ToolTip'
import { IconUserFilled } from '../../../../shared/components/icons/iconUser/IconUserFilled'
import { styles } from '../../../../config/styles'
import { useAppMenu } from '../../../../shared/hooks/useAppMenu'
import { ButtonBackFilled } from '../../../../shared/components/buttons/back/ButtonBackFilled'
import Breadcrumb from '../../../../shared/components/breadcrumb/breadcrumb'

export default function Header(): JSX.Element {
  const history = useNavigate()
  const { setTitlePage, titlePage, breadcrumbs } = useAppMenu()
  useEffect(() => {
    if (!titlePage) setTitlePage('Mis Mascotas')
  }, [titlePage, setTitlePage])

  const OwnerAvatar = (): React.JSX.Element => {
    return (
      <div className={'flex gap-3 px-3 py-3'}>
        <Tooltip content={'Ver cuenta'}>
          <button
            onClick={() => {
              console.log('tu cuenta')
            }}
          >
            <IconUserFilled size={styles.icon.size.md} color={'main-light'} />
          </button>
        </Tooltip>
      </div>
    )
  }
  const BackButton = () => (
    <Tooltip content={'Volver atrás'}>
      <ButtonBackFilled
        onHandle={() => {
          history(-1)
        }}
      />
    </Tooltip>
  )
  const Petwy = () => {
    return <h2 className={'text-5xl font-bold text-white-abs'}>petwy</h2>
  }

  return (
    <div className={'flex flex-row w-full px-6 py-3 gap-6 border-b border-b-gray-light bg-main text-warning'}>
      <Petwy />
      <div className={'flex flex-col gap-3 w-full px-6 '}>
        <h2 className={'text-2xl'}>{titlePage}</h2>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <OwnerAvatar />
    </div>
  )
}
