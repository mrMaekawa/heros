import config from '../../config'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'NightScheme',

  colors: {
    primary: '#000050',
    secondary: '#14142c',
    tertiary: '#18184E',
    quaternary: '#545496',
  },

  textcolors: {
    header1: '#f75c57',
    header2: '#DBDBFA',
    header3: '#7979FA',

    paragraph1: '#DBDBFA',
    paragraph2: '#7979FA',
    paragraph3: '#CCCCCC',
  },

  bgimg:{
    mobile: `${config.public_url}/images/bg_night_mb.jpg`,
    desk: `${config.public_url}/images/bg_night_desk.jpg`,
  },

  logo: `${config.public_url}/images/logo_heroi.svg`,
};
