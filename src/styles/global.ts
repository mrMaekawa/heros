import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Source+Serif+Pro:wght@900&display=swap');

  * { 
      margin:0;
      padding:0;
      box-sizing:border-box;
    }
  body{
    background-color: ${props => props.theme.colors.primary };
    
    height:100vh;
  }

@-webkit-keyframes tilt-in-top-2 {
  0% {
    -webkit-transform: rotateY(-30deg) translateY(-300px) skewY(30deg);
            transform: rotateY(-30deg) translateY(-300px) skewY(30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
            transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
}
@keyframes tilt-in-top-2 {
  0% {
    -webkit-transform: rotateY(-30deg) translateY(-300px) skewY(30deg);
            transform: rotateY(-30deg) translateY(-300px) skewY(30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
            transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
}

`