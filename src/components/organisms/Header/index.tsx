import React from 'react'

import { Logo, SwitchDarkMode, Searchbar } from '../../index'

import { Container } from './styles'

const Header: React.FC = () => {

  return (
    <Container>
      <Logo />
      <SwitchDarkMode />
      <Searchbar />
    </Container>
  );
};

export default Header;