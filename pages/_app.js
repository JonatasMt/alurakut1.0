import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/componentes/lib/AlurakutCommons'
const GlobalStyle = createGlobalStyle`
/*reset documento*/
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
  /*config body*/
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #D9E6F6;
    font-family: sans-serif;
  }

  #__next{
    display:flex;
    min-height:100vh;
    flex-direction:column;
  }

  /*reset imagem*/  
  img{
    max-width: 100%;
    height:auto;
    display:block;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
