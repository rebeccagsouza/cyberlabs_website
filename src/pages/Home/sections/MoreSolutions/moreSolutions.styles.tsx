import styled from 'styled-components'
import { theme } from '~/../styles/globals'

// BLOCK 1
export const ContainerMoreSolutions = styled.section`
    background: ${theme.colors.black};
    min-height: 595px;
    width: 100%;
`

export const Container = styled.div`
    align-items: flex-start;
    color: ${theme.fonts.white};
    display: flex;
    flex-direction: column;
    font-family: ${theme.fonts.firaSans};
    margin: 0 auto;
    max-width: ${theme.max_area};
    padding: ${theme.padding_area};
    height: 100%;

    h2 {
        font-size: 35px;
        font-weight: 400;
        line-height: 1.1;
        padding: 20px 0;
        width: 100%;
    }
`

export const SolutionsArea = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: ${theme.fonts.firaSans};
    height: 100%;
    width: 100%;
    justify-content: space-between;
    @media (min-width: 600px) {
      flex-direction: row;
      font-family: ${theme.fonts.firaSans};
  }
`

export const SolutionItem = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
`

export const ImageArea = styled.figure`
  position: relative;
  height: 192px;
  width: 320px;
  @media (min-width: 1024px) {
    height: 250px;
    width: 500px;
  }

`
export const TextArea = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.1;
    margin-top: 5px;
    max-width: 500px;
`