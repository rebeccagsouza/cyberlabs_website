import styled from 'styled-components'
import { theme } from '~/../styles/globals'

// BLOCK 1
export const ContainerAward = styled.section`
    background-image: url(https://cyberlabs.ai/wp-content/uploads/2021/07/main_blocks_01.jpg);
    background-position: center;
    background-repeat: no-repeat;
    height: 410px;
    margin-bottom: 240px;
    width: 100%;
`

export const Container = styled.div`
    align-items: flex-start;
    display: flex;
    font-family: ${theme.fonts.firaSans};
    margin: 0 auto;
    max-width: ${theme.max_area_1400};
    padding: ${theme.padding_area};
    height: 100%;
    position: relative;/* 
    background-color: white; */
`

export const ImageArea = styled.div`
    /* background-image: url(https://cyberlabs.ai/wp-content/uploads/2021/07/startups_01.jpg);
    background-position: center;
    background-repeat: no-repeat; */
    position: relative;
    width: 170px;
    width: 100%;
    @media (min-width: 1024px) {
      width: 450px
  }
`

export const TextArea = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-family: ${theme.fonts.firaSans};
    height: 100%;
    justify-content: center;
    position: absolute;
    right: 0;

    h2 {
        font-size: 35px;
        font-weight: 400;
        line-height: 1.1;
        max-width: 785px;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.1;
        max-width: 785px;
    }
`