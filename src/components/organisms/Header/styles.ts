import styled from "styled-components"

export const Container = styled.div`
  height: 4vw;
  background-color: ${ props => props.theme.colors.primary };
  color: ${ props => props.theme.textcolors.header1 };
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 2vw;
`