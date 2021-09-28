import merge from 'lodash/merge'

const config = {
  all: {
    env: 'development',
    apiUrl: 'https://www.superheroapi.com/',
    accessToken: '5035037996512360',
    gtmId: 'GTM-KP8VSG4',
  },
  test: {},
  development: {},
  production: {},
}

export default merge(config.all, config[config.all.env])
