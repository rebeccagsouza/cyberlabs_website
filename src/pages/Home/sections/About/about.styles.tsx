import styled from 'styled-components'
import { theme } from '~/../styles/globals'

export const ContainerAbout = styled.section`
    background-color: #f5f5f3;
    height: 968px;
    @media (min-width: 1024px) {
      height: 500px;
      position: relative;    
      margin-bottom: 50px; //remove this latter
      height: 968px;
    }
`

export const Container = styled.section`
    align-items: center;
    display: flex;
    font-family: ${theme.fonts.firaSans};
    margin: 0 auto;
    max-width: ${theme.max_area};
    height: 100%;
    position: relative;
    flex-direction: column;
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
    }
`

export const AboutText = styled.div`
    align-items: flex-start;
    color: black;
    display: flex;
    flex-direction: column;
    font-family: ${theme.fonts.firaSans};
    justify-content: center;
    max-width: 550px;
    padding: ${theme.padding_area};
    height: 100%;

    h2 {
        font-size: 45px;
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
        line-height: 1.5;
    }
`

export const AboutBg = styled.div`
    align-items: center;
    background: url(https://cyberlabs.ai/wp-content/uploads/2021/07/screen_cones_01.jpg;);
    background-repeat: no-repeat;
    display: flex;
    height: 300px;
    width: 100%;
    @media (min-width: 1024px) {
      /* position: absolute; */
      right: 0;
      top: 0;
      width: 45%;
    }
`
export const AboutLogoBlock = styled.div`
    background-color: #000;
    color: #fff;
    height: 85px;
    margin-left: -42.5px;
    width: 405px;
`

export const Text = styled.div`
  
`

export const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 50px;
`