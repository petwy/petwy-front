const config = {
  api: {
    core: {
      token: process.env.PETWY_TOKEN || '',
      url: process.env.PETWY_CORE_URL,
    },
  },
  request: {
    retries: 3,
    backoffType: 'linear',
    timeout: 15000,
  },
}

export default config
