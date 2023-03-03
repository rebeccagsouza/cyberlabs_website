import Image from 'next/image'
import OwnImage from '~/components/atoms/Image/Image'
import { Container , ContainerMoreSolutions , ImageArea , SolutionsArea , SolutionItem , TextArea  } from './moreSolutions.styles'

export default function Solutions() {
  return (
   <>
      <ContainerMoreSolutions>
         <Container>
               <h2>Mais Soluções.</h2>

               <SolutionsArea>
                  <SolutionItem>
                     <ImageArea>
                        <Image 
                           alt='dfndr enteprise'
                           src='https://cyberlabs.ai/wp-content/uploads/2021/09/DFNDR_lab-1024x493.jpg'
                           fill
                           style={{maxWidth: "100%"}}/>
                     </ImageArea>
                     <TextArea>
                        dfndr lab é o maior e principal laboratório de cibersegurança da América Latina. Utiliza técnicas de I.A. e 
                        machine learning para detectar, prever e alertar a população sobre os mais recentes e sofisticados ataques virtuais.
                     </TextArea>
                  </SolutionItem>
                  <SolutionItem>
                     <ImageArea>
                        <Image 
                           alt='dfndr enteprise'
                           src='https://cyberlabs.ai/wp-content/uploads/2021/09/CYBERLABS_academy-1024x493.png'
                           fill
                           style={{maxWidth: "100%"}}/>
                     </ImageArea>
                     <TextArea>
                        CyberLabs Academy é o nosso canal no YouTube, que promove a educação por meio de aulas online sobre os principais 
                        assuntos de machine learning e inteligência artificial.
                     </TextArea>
                  </SolutionItem>
               </SolutionsArea>
         </Container>
      </ContainerMoreSolutions>
   </>
  )
}
