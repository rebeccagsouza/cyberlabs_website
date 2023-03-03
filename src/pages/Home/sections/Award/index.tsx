import Image from 'next/image'
import { Container , ContainerAward , ImageArea , TextArea  } from './award.styles'

export default function Award() {
  return (
   <>
      <ContainerAward>
         <Container>
               <ImageArea>
                  <Image
                            src={'https://cyberlabs.ai/wp-content/uploads/2021/07/startups_01.jpg'}
                            alt={'100 startups to watch'}
                            fill
                            style={{maxWidth: "100%"}}
                        />
                </ImageArea>
               <TextArea>
                <h2>Eleita como uma das 100 Startups To Watch em 2021.</h2>
                <p>Na lista divulgada pela revista Pequenas Empresas & Grandes Negócios, a CyberLabs é 
                    destaque na categoria Tecnologia da Informação. A avaliação foi realizada pelo EloGroup 
                    e pela Innovc, e mensurou o grau de inovação, potencial de mercado e maturidade das empresas.</p>
               </TextArea>
         </Container>
      </ContainerAward>
   </>
  )
}
