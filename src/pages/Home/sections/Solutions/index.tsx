import Image from 'next/image'
import { Container , ContainerSolutions , ImageArea , SolutionsArea , SolutionItem , TextArea  } from './solutions.styles'

import SolutionsData from '~/data/solutions.json'

export default function Solutions() {
  const SolutionsPt = SolutionsData['pt-BR']
  return (
   <>
      <ContainerSolutions>
         <Container>
               <h2>Soluções.</h2>

               <SolutionsArea>
               {
                     SolutionsPt && SolutionsPt.map((solutionsItem) => {
                        return(
                  <><SolutionItem>
                              <><ImageArea>
                                 <Image
                                    alt={solutionsItem.text}
                                    height={400}
                                    src={solutionsItem.src}
                                    width={200}
                                    style={{maxWidth: "100%", height: "auto"}} />
                              </ImageArea><TextArea>
                                    {solutionsItem.text}
                                 </TextArea></>
                           </SolutionItem><SolutionItem>
                                 {/* <ImageArea>
                                    <Image
                                       alt={solutionsItem.text}
                                       height={solutionsItem.height}
                                       src={solutionsItem.src}
                                       width={solutionsItem.width} />
                                 </ImageArea>
                                 <TextArea>
                                    {solutionsItem.text}
                                 </TextArea> */}
                              </SolutionItem></>
                )})   
               }
            </SolutionsArea>
      </Container>
   </ContainerSolutions>
   </>
  )
}
