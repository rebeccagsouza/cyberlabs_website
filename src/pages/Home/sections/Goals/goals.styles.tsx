import styled from 'styled-components'
import { theme } from '~/../styles/globals'

// BLOCK 1
export const ContainerGoals = styled.section`
    align-items: flex-start;
    background-color: white;
    display: flex;
    font-family: ${theme.fonts.firaSans};
    margin: 0 auto;
    max-width: 100%;
    padding: ${theme.padding_area};
    height: 100%;
    margin-bottom: 130px;
    margin-top: 100px;
    position: relative;
    @media (min-width: 1024px) {
      background-color: white;
      margin-top: unset;
      margin-top: -100px;
      height: 469px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
`

export const GoalsGridItem = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 auto;
    max-width: 220px;
    padding-top: 50px;
    padding-bottom: 50px;
`

export const GoalsTitle = styled.div`
    color: ${theme.fonts.black};
    font-weight: 700;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    line-height: 1.1;
`

export const GoalsDesc = styled.div`
    color: ${theme.fonts.black};
    font-size: 16px;
    line-height: 1.1;
`