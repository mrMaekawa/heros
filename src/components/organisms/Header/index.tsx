import React from 'react';
import Switch from 'react-switch';

import { Container } from './styles'

//interface Props {
//  toggleScheme(): void
//}

//const Header: React.FC<Props> = ({ toggleScheme }) => {
const Header: React.FC = () => {
  return (
    <Container>
      SuperHerois
      <Switch
        onChange={() => {}}
        checked={false}
      >

      </Switch>
    </Container>
  );
};

export default Header;