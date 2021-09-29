import styled from "styled-components"

export const Container = styled.div`
  width:85.657vw;
  height:93.737vw;
  background-color: ${props => props.theme.colors.secondary };
  box-shadow: 0px .505vw .505vw rgba(0, 0, 0, 0.25);
  border-radius: 1.515vw;
  margin:0 auto;
  position:relative;
  opacity:0;
  transition:opacity 600ms;

  @media(min-width:991px) {
    width:93.438vw;
    height:28.281vw;
    box-shadow: 0px .417vw .417vw rgba(0, 0, 0, 0.25);
    border-radius: .781vw;
    transition:opacity 400ms;
  }

  &.modal{
    opacity:1;
    transition:opacity 600ms;
    -webkit-animation: tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .img{
    width:33.333vw;
    height:37.374vw;
    position:absolute;
    top:4.545vw;
    left:4.545vw;
    border-radius:1.01vw;
    border:4px solid ${props => props.theme.colors.tertiary };

    @media(min-width:991px) {
      width:17.135vw;
      height:15.833vw;
      top:1.302vw;
      left:1.302vw;
      border-radius: .781vw;
    }
  }

  h2{
    width:38.586vw;
    height:36.465vw;
    position:absolute;
    top:4.545vw;
    left:40.303vw;
    font-family: 'Source Serif Pro', serif;
    font-size:7.576vw;
    color: ${props => props.theme.textcolors.header1 };
    display:flex;
    justify-content: left;
    align-items: center;

    @media(min-width:991px) {
      width:24.427vw;
      height:8.229vw;
      top:19.063vw;
      left:1.302vw;
      font-size:2.917vw;
    }
  }

  section{
    width:75.96vw;
    height:43.131vw;
    position:absolute;
    top:46.869vw;
    left:4.545vw;
    display:flex;
    flex-flow: column wrap;
    align-items: stretch;
    align-content: stretch;
    overflow: auto;

    @media(min-width:991px) {
      width:71.719vw;
      height:24.896vw;
      top:0.545vw;
      left:20.625vw;
      display:block;
    }

    ul{
      list-style: none;
      margin:2vw;
      max-width:24%;
      flex: 0 1 auto;

      @media(min-width:991px) {
        flex: unset;
        float: left;
      }

      li{
        float:left;
        clear:left;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.9vw;
        line-height:2.4vw;
        margin-top:0.5vw;
        white-space: nowrap;
        color: ${props => props.theme.textcolors.paragraph2 };

        @media(min-width:991px) {
          font-size: 1.146vw;
          line-height:1.5vw;
          margin-top:0.2vw;
          white-space: wrap;
        }

        &.title{
          width:100%;
          color: ${props => props.theme.textcolors.header2 };
          border: none 2px ${props => props.theme.textcolors.header1 };
          border-bottom-style: solid;
        }

        span{
          white-space: normal;
          margin-left:0.8vw;
          font-size: 2.222vw;
          color: ${props => props.theme.textcolors.header2 };

          @media(min-width:991px) {
            font-size: 1.146vw;
            line-height:1.5vw;
            margin-top:1.5vw;
          }
        }
      }
    }
  }

  .close{
    width:6vw;
    height:6vw;
    position:absolute;
    top:2vw;
    right:2vw;
    background-color: ${props => props.theme.colors.tertiary };
    border-radius: 50%;
    z-index:80;
    transform: rotate(45deg);

    &:before{
      content:'';
      width:10%;
      height:80%;
      background-color: ${props => props.theme.colors.quaternary };
      display:block;
      position:absolute;
      top:10%;
      left:45%;
      border-radius: 50%;
    }

    &:after{
      content:'';
      width:80%;
      height:10%;
      background-color: ${props => props.theme.colors.quaternary };
      display:block;
      position:absolute;
      top:45%;
      left:10%;
      border-radius: 50%;
    }

    @media(min-width:991px) {
      width:3vw;
      height:3vw;
      top:1vw;
      right:1vw;
    }
  }
`