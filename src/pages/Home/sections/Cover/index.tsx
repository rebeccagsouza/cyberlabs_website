import { icDownCircle } from '~/assets/fontAwesome'
import { Container , ContainerCover , MeetTheGroup , TextArea  } from './cover.styles'

export default function Cover() {
  return (
   <>
      <ContainerCover>
         <Container>
               <TextArea>
                <h1>Elevamos a Inteligência Artificial ao Estado da Arte</h1>
                <h2>Nossos produtos melhoram a vida de milhões de pessoas.</h2>
               </TextArea>
               
               <MeetTheGroup>
                  <label>{icDownCircle} Conheça o <br/> Grupo CyberLabs</label>
                  <ul>
                     <li>
                        <label>+18BI</label>
                        <p>Maior base de credenciais do mundo</p>
                     </li>
                     <li>
                        <label>+300MM</label>
                        <p>Downloads de nossas soluções globalmente</p>
                     </li>
                     <li>
                        <label>+43MM</label>
                        <p>Consultas ao antiphishing realizadas ao dia</p>
                     </li>
                     <li>
                        <label>+200</label>
                        <p>Colaboradores em prol da sua vida digital</p>
                     </li>
                  </ul>
               </MeetTheGroup>

         </Container>
      </ContainerCover>
   </>
  )
}
