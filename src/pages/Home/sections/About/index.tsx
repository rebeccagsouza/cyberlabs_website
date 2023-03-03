import { Container , ContainerAbout , AboutText , AboutBg , AboutLogoBlock, Title, Text  } from './about.styles'
import Image from 'next'

export default function About() {
  return (
      <ContainerAbout>
            <Container>
               <AboutText>
                  <Title>Sobre o Grupo CyberLabs</Title>
                  <Text>O Grupo CyberLabs é a maior companhia de Inteligência Artificial e Cibersegurança 
                     da América Latina. Formado pela fusão de duas líderes em seus segmentos, a PSafe, 
                     autoridade em cibersegurança, e a CyberLabs, referência em soluções disruptivas de 
                     I.A., atua na constante pesquisa, incentivo e desenvolvimento de tecnologias que 
                     resolvam os grandes problemas da Era Digital. Nosso propósito é encontrar, por meio 
                     da Inteligência Artificial, soluções para dilemas até então insolúveis.</Text>
               </AboutText>
               <AboutBg>
                <AboutLogoBlock></AboutLogoBlock>
               </AboutBg>           
            </Container>
      </ContainerAbout>
  )
}
