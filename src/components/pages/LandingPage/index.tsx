import React from 'react'

import { Header, Listbar, Character, Footer } from '../../index'
import { Container } from './styles'

const LandingPage = () => {
  return (
    <Container>
      <main>
        <Header />
        <Listbar />
        <Character />
        <Footer />
        <section className='bg' />
        <h3 className='help'>Herói ou Vilão,<br />quer saber mais sobre seu personagem favorito?<br /><br />Busque por uma parte  do nome ou pelo nome completo mesmo e depois clique no card e veja mais detalhes!</h3>
      </main>
    </Container>
  );
};

export default LandingPage;