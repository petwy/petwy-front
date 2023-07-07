import React, { JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import { IOwner } from '../../../domain/entities/owners/owner'
import Breadcrumb from '../../../shared/components/breadcrumb/breadcrumb'
import { Tooltip } from '../../../shared/components/loadingBar/toolTip/ToolTip'
import { IconBackFilled } from '../../../shared/components/icons/iconBack/IconBackFilled'
import { IconUserFilled } from '../../../shared/components/icons/iconUser/IconUserFilled'
import { styles } from '../../../config/styles'

export default function HeaderView(props: { title: string; owner: IOwner }): JSX.Element {
  const { title } = props
  const history = useNavigate()

  return (
    <div className={'flex flex-col w-full gap-3 lg:p-3 border-b border-b-gray-light'}>
      <Breadcrumb />
      <div className={'flex flex-row justify-between items-center'}>
        <Tooltip content={'Volver atrás'}>
          <button
            onClick={() => {
              history(-1)
            }}
          >
            <IconBackFilled size={styles.icon.size.md} color={'main'} />
          </button>
        </Tooltip>

        {/*<div className={''}>*/}
        {/*  <Link to={'pets/new'}>*/}
        {/*    <button*/}
        {/*      onClick={toggle}*/}
        {/*      className={*/}
        {/*        'flex flex-row gap-3 w-full justify-center items-center py-3 px-6 border border-main rounded-xl'*/}
        {/*      }*/}
        {/*    >*/}
        {/*      <Icon className={'text-2xl text-success'}>*/}
        {/*        {' '}*/}
        {/*        <IoMdAddCircle />*/}
        {/*      </Icon>*/}
        {/*      <p>Agregar mascota</p>*/}
        {/*    </button>*/}
        {/*  </Link>*/}
        {/*</div>*/}
        <h1 className={'title-main text-2xl'}>{title}</h1>
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
