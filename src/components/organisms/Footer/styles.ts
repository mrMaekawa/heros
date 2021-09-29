import styled from "styled-components"

export const Container = styled.div`
  height:8.99vw;
  width:100%;
  margin-top:8.99vw;
  background-color: ${ props => props.theme.colors.primary };
  color: ${ props => props.theme.textcolors.header1 };
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding:0 2vw;

  @media(min-width:991px) {
    height:2.292vw;
    width:100%;
    position:fixed;
    left:0;
    bottom: 0;
  }

  h3{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.9vw;
    line-height:2.4vw;
    margin-top:0.5vw;
    white-space: nowrap;
    color: ${props => props.theme.textcolors.paragraph1 };
    
    @media(min-width:991px) {
      font-size: .938vw;
    }
  }
  
  img{
    width:17.172vw;
    height:3.939vw;
    
    @media(min-width:991px) {
      width:5.521vw;
      height:1.25vw;
    }
  }
`