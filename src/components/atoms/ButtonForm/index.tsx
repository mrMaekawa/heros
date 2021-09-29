import React from 'react'
import styled from 'styled-components'
import config from '../../../config'

export const Container = styled.div`
  height:5.758vw;
  width:24.848vw;
  background-color: ${props => props.theme.colors.quaternary };
  display:block;
  font-family: 'Open Sans', sans-serif;;
  font-size: 3.232vw;
  line-height:5.758vw;
  text-align:center;
  color:${props => props.theme.textcolors.header1 };
  border-radius:1.515vw;
  position: relative;
  cursor: pointer;

  &:after{
    content:'';
    width:1.212vw;
    height:1.212vw;
    position: absolute;
    top:2.316vw;
    right:2.01vw;
    background-color: transparent;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${config.public_url}/images/setinha.svg);
    display:block;
  }

  &:hover{
    background-color: ${props => props.theme.colors.primary };
  }

  

`
const ButtonForm = (props:{onClick:()=>void}) => {

  return (
    <Container className='button-form' onClick={props.onClick}>
      BUSCAR
    </Container>
  );
};

export default ButtonForm;
