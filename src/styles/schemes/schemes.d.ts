import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
    }

    textcolors: {
      header1: string;
      header2: string;
      header3: string;
  
      paragraph1: string;
      paragraph2: string;
    }
  }
}
