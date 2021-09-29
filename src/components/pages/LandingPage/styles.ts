import styled from "styled-components"

export const Container = styled.div`
  height: 177.778vw;
  width: 100%;
  position:relative;

  @media(min-width:991px) {
    height: 51.302vw;
  }

  .bg {
    height: 175.778vw;
    width: 100%;
    position: fixed;
    top:1vw;
    left:0;
    background-position:center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.theme.bgimg.mobile });
    z-index: -1;

    @media(min-width:991px) {
      height: 51.302vw;
      background-image: url(${props => props.theme.bgimg.desk });
    }
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

    @media(min-width:991px) {
      width:85.156vw;
      height:21.563vw;
      top:24.323vw;
      left:9.115vw;
      font-size:3.073vw;
    }
  }
`