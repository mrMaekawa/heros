import styled from "styled-components"

export const Container = styled.div`
  width:90.909vw;
  height:11.616vw;
  background-color: ${props => props.theme.colors.tertiary };
  position: absolute;
  bottom: 3.535vw;
  left:3.939vw;
  margin:0 auto;

  .button-form{
    position:absolute;
    top:2.929vw;
    right:2.929vw;
  }

  input{
    display:block;
    background-color: transparent;
    border:none;
    width:59.596vw;
    height:11.616vw;
    position:absolute;
    top:0;
    left:2.929vw;
    font-family: 'Source Serif Pro', serif;
    font-size:3.838vw;
    color:${props => props.theme.textcolors.header3 };

    &:focus, &:focus{
      outline: none;
    }
  }
`