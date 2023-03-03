import {Container , ContainerGoals , GoalsDesc, GoalsGridItem , GoalsTitle } from './goals.styles'
import Data from './data.json'
import Image from 'next/image'

export default function Goals() {

    const DataContent = Data['pt-BR']


  return (
      <ContainerGoals>
            <Container>

                { Data && DataContent.map((item, i) => (
                    <GoalsGridItem key={i}>                    
                        <Image
                            src={item.image_url}
                            alt={item.alt}
                            width={60}
                            height={60}
                        />
                        <GoalsTitle dangerouslySetInnerHTML={{ __html: item.title }} />
                        <GoalsDesc>{item.desc}</GoalsDesc>
                    </GoalsGridItem>
                )) }

            </Container>
      </ContainerGoals>
  )
}
