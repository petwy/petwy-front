const coats: Record<string, string> = {
  white: 'bg-white-abs text-gray-dark',
  black: 'bg-gray-dark text-white',
  gray: 'bg-gray text-white',
  orange: 'bg-[#FFA500] text-white',
  cream: 'bg-[#F9E4B7] text-white-abs',
  brown: 'bg-[#964B00] text-white',
}
export const styles = {
  coat: (str: string): string => coats[str],
  button: {
    shape: {
      rounded: 'rounded',
      'rounded-xl': 'rounded-xl',
      error: 'text-error-light cursor-pointer hover:text-error transition-colors',
    },
    color: {
      dark: 'bg-main text-white shadow-xl shadow-gray-light',
      disable: 'bg-white border border-gray-light text-gray shadow-xl shadow-gray-light',
    },
    text: {
      small: 'text-sm',
      medium: 'text-md',
      large: 'text-lg',
    },
    size: {
      xl: 'px-9 py-3',
      wide: 'w-full px-9 py-3',
    },
    effect: {
      'main-to-light': 'hover:bg-main-dark hover:bg-opacity-80 transition-colors',
    },
  },
  'form-block': {
    normal: 'flex flex-col gap-3 mt-3',
  },
  opacity: {
    'op-80': 'bg-opacity-80',
  },
  text: {
    'title-big': 'text-3xl font-bold',
    'main-title': 'text-2xl font-bold',
    title: 'text-lg font-bold',
    error: 'text-error italic',
    italic: 'italic',
  },
  'input-box': {
    main: 'shadow appearance-none border rounded w-full py-2 px-3 text-main leading-tight focus:outline-none focus:shadow-outline',
    'no-border':
      'shadow appearance-none rounded w-full py-2 px-3 text-main leading-tight focus:outline-none focus:shadow-outline',
  },
  error: {
    field: 'text-error',
  },
  icon: {
    size: {
      xs: 'w-3 h-3 text-xs',
      sm: 'w-6 h-6 h-max-6 w-max-6 text-sm',
      md: 'w-9 h-9 text-md',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-18 h-18 text-xl',
    },
  },
}
