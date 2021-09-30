import React from 'react'
import config from '../../../configs/config'
import { Container } from './styles'

const Footer: React.FC = () => {

  return (
    <Container>
      <h3>mrMaekawa@gmail.com</h3>
      <a href='https://www.superheroapi.com/' title='superheroapi.com' target='_blank' rel='noreferrer' >
        <img src={`${config.public_url}/images/superapi.jpg`} alt='superapi' />
      </a>
    </Container>
  );
};

export default Footer;