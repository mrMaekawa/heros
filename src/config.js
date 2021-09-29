import merge from 'lodash/merge'

const config = {
  all: {
    env: 'development',
    apiUrl: 'https://www.superheroapi.com/api.php/',
    accessToken: '5035037996512360',
    gtmId: 'GTM-KP8VSG4',
  },
  test: {},
  development: {
    public_url: 'http://localhost:3000/'
  },
  production: {},
}

export default merge(config.all, config[config.all.env])
