import styled from "styled-components"

export const Container = styled.div`
  height: 177.778vw;
  width: 100vw;
  position:relative;

  .bg {
    height: 175.778vw;
    width: 100vw;
    position: fixed;
    top:1vw;
    left:0;
    background-position:center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.theme.bgimg.mobile });
    z-index: -1;
  }

  .box{
    z-index:150;
  }

  h3.help{
    width:69.091vw;
    height:81.919vw;
    position: absolute;
    top:78.081vw;
    left:15.455vw;
    font-size:5.96vw;
    font-family: 'Source Serif Pro', serif;
    color: ${props => props.theme.textcolors.paragraph3 };
    text-align: center;
    z-index:100;
  }
`