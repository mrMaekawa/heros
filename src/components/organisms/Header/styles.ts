import styled from "styled-components"

export const Container = styled.div`
  height:31.111vw;
  width:100vw;
  background-color: ${ props => props.theme.colors.primary };
  color: ${ props => props.theme.textcolors.header1 };
  display:fixed;
  position: relative;

  .logo {
    width:30.303vw;
    height:9.798vw;
    position: absolute;
    top:3.03vw;
    left:calc( 50% - ( 30.303vw / 2 ))
  }

  .darkmode {
    position: absolute;
    top:2.02vw;
    left:83.838vw;
  }
`