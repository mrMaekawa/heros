import styled from "styled-components"

export const Container = styled.div`
  width:17.677vw;
  min-width:17.677vw;
  height:24.545vw;
  background-color: ${props => props.theme.colors.secondary };
  box-shadow: 0px .505vw .505vw rgba(0, 0, 0, 0.25);
  border-radius: 1.515vw;
  overflow:hidden;
  position:relative;
  transition:transform 300ms;

  &:hover{
    transform: scale(1.1);
  }

  section{
    width:100%;
    height:100%;
    position:absolute;
    bottom:0;
    left:0;
    z-index:10;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  label{
    width:100%;
    height:12.626vw;
    position:absolute;
    bottom:0;
    left:0;
    border-radius: 1.515vw 1.515vw 0 0;
    display:flex;
    text-align: center;
    justify-content:center;
    align-items:center;
    padding:1.212vw;
    overflow:hidden;
    font-size:2.424vw;
    font-family: 'Source Serif Pro', serif;
    color:${props => props.theme.textcolors.header1};
    
    span{
      z-index:30;
    }

    &:before{
      content:'';
      width: 100%;
      height:100%;
      position:absolute;
      z-index:20;
      top:0;
      left:0;
      background-color: ${props => props.theme.colors.primary };
      opacity:0.8;
    }
  }
`