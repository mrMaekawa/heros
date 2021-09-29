import styled from "styled-components"

export const Container = styled.div`
  height:31.111vw;
  width:100vw;
  background-color: ${ props => props.theme.colors.primary };
  color: ${ props => props.theme.textcolors.header1 };
  display:fixed;
  position: relative;

  @media(min-width:991px) {
    height:6.615vw;
  }

  .logo {
    width:30.303vw;
    height:9.798vw;
    position: absolute;
    top:3.03vw;
    left:calc( 50% - ( 30.303vw / 2 ));

    @media(min-width:991px) {
      width:12.24vw;
      height:3.958vw;
      top: 1.354vw;
      left:2.135vw;
    }
  }

  .darkmode {
    position: absolute;
    top:2.02vw;
    left:83.838vw;

    @media(min-width:991px) {
      top:1.563vw;
      left:91.979vw;
    }
  }
`