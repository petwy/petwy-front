export const routes = {
  home: '/',
  owners: {
    register: '/owners/new',
    manager: {
      home: (id: string) => `/owner/${id}`,
      pets: {
        petID: (id: string) => `pets/${id}`,
        new: 'pets/new',
        vaccines: 'pets/vaccines',
        antiparasitic: 'pets/antiparasitic',
        chronics: 'pets/chronics',
        alerts: 'pets/alerts',
      },
    },
  },
  veterinary: {
    register: '/veterinaries/new',
  },
  petwy: {
    support: '/support',
    contact: '/contact',
  },
}
