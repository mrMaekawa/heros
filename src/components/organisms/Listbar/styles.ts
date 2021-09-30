import styled from "styled-components"

export const Container = styled.div`
  width:100%;
  height:34.343vw;
  position:relative;
  overflow-y: hidden;
  overflow-x: auto;
  display:flex;
  flex-wrap: nowrap;
  padding: 0 2.02vw;
  justify-content: space-around;

  @media(min-width:991px) {
    height:12.5vw;
    padding: 0 1.563vw;
    overflow-x: auto;
  }

  &.between{
    justify-content: space-between;
  }

  div.card{
    width:17.677vw;
    min-width:17.677vw;
    height:24.545vw;
    background-color: transparent;
    margin:4.051vw 2.02vw 0 2.02vw;

    @media(min-width:991px) {
      width:6.563vw;
      min-width:6.563vw;
      height:3.958vw;
      margin:1.771vw 1.198vw 0 1.198vw;
    }
  }
  p{
    font-family: 'Source Serif Pro', serif;
    color: ${props => props.theme.textcolors.paragraph3 };
    text-align: center;
    font-size:3.042vw;
    margin-top: 3vw;

    @media(min-width:991px) {
      font-size:2.042vw;
      margin-top: 3vw;
    }
  }
`