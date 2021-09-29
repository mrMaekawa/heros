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

  @media(min-width:991px) {
    width:9.531vw;
    height:2.24vw;
    font-size: 1.146vw;
    line-height:2.24vw;
    border-radius:.781vw;
  }

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

    @media(min-width:991px) {
      width:.625vw;
      height:.625vw;
      top:.833vw;
      right:.521vw;
    }
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
