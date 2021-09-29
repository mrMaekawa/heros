import styled from "styled-components"

export const Container = styled.div`
  width:90.909vw;
  height:11.616vw;
  background-color: ${props => props.theme.colors.tertiary };
  position: absolute;
  bottom: 3.535vw;
  left:3.939vw;
  margin:0 auto;

  @media(min-width:991px) {
    width:35.052vw;
    height:4.479vw;
    bottom: .625vw;
    left:32.448vw;
  }

  .button-form{
    position:absolute;
    top:2.929vw;
    right:2.929vw;

    @media(min-width:991px) {
      top:1.12vw;
      right:1.12vw;
    }
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

    @media(min-width:991px) {
      width:22.813vw;
      height:4.479vw;
      left:1.094vw;
      font-size:1.406vw;
      line-height:4.479vw;
    }

    &:focus, &:focus{
      outline: none;
    }
  }
`