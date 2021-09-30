import config from '../../configs/config'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'DayScheme',

  colors: {
    primary: '#f75C57',
    secondary: '#FFFFFF',
    tertiary: '#18184E',
    quaternary: '#FFFFFF',
  },

  textcolors: {
    header1: '#18184E',
    header2: '#F75C57',
    header3: '#FFFFFF',

    paragraph1: '#FFFFFF',
    paragraph2: '#707070',
    paragraph3: '#18184E',
  },

  bgimg:{
    mobile: `${config.public_url}/images/bg_day_mb.jpg`,
    desk: `${config.public_url}/images/bg_day_desk.jpg`,
  },

  logo: `${config.public_url}/images/logo_heroi.svg`,
};
