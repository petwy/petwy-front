const config = {
  api: {
    core: {
      key: import.meta.env.VITE_API_KEY || '',
      token: import.meta.env.VITE_PETWY_TOKEN || '',
      url: import.meta.env.VITE_PETWY_CORE_URL,
      environment: import.meta.env.NODE_ENV,
    },
  },
  request: {
    retries: 3,
    backoffType: 'linear',
    timeout: 15000,
  },
}

export default config
