import styled from 'styled-components'
import { theme } from '~/../styles/globals'

// BLOCK 1
export const ContainerRecruit = styled.section`
    background: url(https://cyberlabs.ai/wp-content/uploads/2021/07/blocks_bkgnd_01.jpg);
    background-color: #F2BB29;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: screen;
    height: 480px;
    width: 100%;
`

export const Container = styled.div`
    align-items: center;
    color: ${theme.fonts.black};
    display: flex;
    flex-direction: column;
    font-family: ${theme.fonts.firaSans};
    justify-content: center;
    margin: 0 auto;
    max-width: ${theme.max_area};
    padding: ${theme.padding_area};
    height: 100%;
    text-align: center;

    h2 {
        font-size: 40px;
        font-weight: 700;
        line-height: 1.1;
        width: 100%;
    }

    p {
        font-size: 22px;
        font-weight: 400;
        line-height: 1.3;
        margin-bottom: 50px;
        max-width: 800px;
        width: 100%;
    }
    a {
        align-items: center;
        background-color: ${theme.colors.black};
        color: ${theme.fonts.white};
        display: flex;
        font-size: 18px;
        height: 55px;
        justify-content: center;
        width: 150px;

        &:hover {
            box-shadow: 2px 2px 5px #3d3d3e;
        }
    }
`