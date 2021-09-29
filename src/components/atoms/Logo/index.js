import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  height:97px;
  width:300px;
  background-color: transparent;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${props => props.theme.logo });
  display:block;


`
const Logo = () => {

  return (
    <Container className='logo'/>
  );
};

export default Logo;
