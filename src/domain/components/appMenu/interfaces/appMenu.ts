export type AppMenu = {
  id: string
  label: string
  hasSubMenu: boolean
  subMenu?: Array<AppSubMenu> | undefined
  src?: string
  action?: any
}

export type AppSubMenu = {
  id: string
  label: string
  link: string
}
