import { IBreadcrumb } from '../../domain/components/appMenu/interfaces/IBreadcrumb'
import { useState } from 'react'

export const useBreadcrumbs = () => {
  const [breadCrumbs, setBreadcrumbs] = useState<Array<IBreadcrumb>>([])
  console.log('render', breadCrumbs)

  const addBreadCrumb = (next: IBreadcrumb) => {
    setBreadcrumbs([...breadCrumbs, next])
  }
  const removeBreadCrumb = () => {
    setBreadcrumbs(breadCrumbs.splice(0, breadCrumbs.length - 1))
  }
  console.log('useBreadcrumbs', breadCrumbs)
  return { breadCrumbs, addBreadCrumb, removeBreadCrumb }
}
