
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/componentes/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/componentes/relationsArea';


function ProfileSidebar(propriedades){
  return (
      <Box>
          <img src= {`https://github.com/${propriedades.userGitHub}.png`} style={{borderRadius:'8px;'}}/>
      </Box>
  )
  
}


export default function Home() {
  const userGitHub = "JonatasMt";
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  


  ]
  


  return (
    <>
    <AlurakutMenu/>
        <MainGrid>
          <div className="profileArea" style={{gridArea:'profileArea'}}>
           < ProfileSidebar userGitHub={userGitHub}/>
         </div>
          
          <div className = "welcomeArea" style={{gridArea:'welcomeArea'}}>
            <Box>
              <h1 className="Title">
              Bem Vindo(a)
              </h1>

              <OrkutNostalgicIconSet/>
            </Box>
          </div>
          <div className ="relationsArea" style={{gridArea:'relationsArea'}}>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                  Pessoas da Comunidade ({pessoasFavoritas.length})
              </h2>

              <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            </ProfileRelationsBoxWrapper>

            <Box>
              Comunidade
            </Box>
          </div>
        
        </MainGrid>
    </>
    )
}
