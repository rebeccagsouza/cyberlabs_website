import styled from 'styled-components'
import { theme } from '~/../styles/globals'

export const Wrap = styled.div`
    width: 100%;
    background-color: white;
`

export const CarouselWrap = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-top: 100px;
`

export const CarouselContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-behavior: smooth;
    background-color: white;
    height: 440px;
    &::-webkit-scrollbar{
        display:none;
    }
`

export const CarouselItem = styled.div`
    padding: 20px;
`
export const Title = styled.div`
    font-size: 20px;
    text-align: left;
    color: black;
    margin-left: 24px;
`

export const Text = styled.div`
    font-size: 16px;
    height: 96px;
    max-width: 184px;
    padding-bottom: 10px;
    color: black;
`

export const TitleItem = styled.a`
    font-size: 13px;
    color: black;
`
export const TextArea = styled.div`
    padding-top: 30px;
`
export const Buttons = styled.div`
    width: 100%;
    text-align: right;
    background-color: white;

    & button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: black;
        svg {
                width: 30px;
            }
        :first-child{
            transform: rotate(-90deg);
        }
        :nth-child(2){
            transform: rotate(-90deg);
        }
        
    }
`