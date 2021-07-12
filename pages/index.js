
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box';

export default function Home() {
  const userGitHub = "JonatasMt";


  return (
        <MainGrid>
          <div className="profileArea" style={{gridArea:'profileArea'}}>
            <Box>
              <img src= {`https://github.com/${userGitHub}.png`} style={{borderRadius:'8px;'}}/>
            </Box>
          </div>
          
          <div className = "welcomeArea" style={{gridArea:'welcomeArea'}}>
            <Box>
              Bem Vindo
            </Box>
          </div>
          <div className ="relationsArea" style={{gridArea:'relationsArea'}}>
            <Box>
              Pessoas da Comunidade
            </Box>
          </div>
        
        </MainGrid>
    )
}
