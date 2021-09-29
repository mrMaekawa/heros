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

  &.between{
    justify-content: space-between;
  }

  div.card{
    width:17.677vw;
    min-width:17.677vw;
    height:24.545vw;
    background-color: transparent;
    margin:4.051vw 2.02vw 0 2.02vw;
  }
  p{
    font-size:16px;
  }
`