import styled from 'styled-components'
import { theme } from '~/../styles/globals'

// BLOCK 1
export const ContainerCover = styled.section`
  background-image: url(https://cyberlabs.ai/wp-content/uploads/2021/07/main_blocks_01.jpg);
  background-position: center;
  background-repeat: no-repeat;
  height: 907px;
  width: 100%;

  @media (min-width: 1024px) {
    background-position: center;
    background-repeat: no-repeat;
    height: 140vh;
    width: 100%;
  }
`

export const Container = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: center;
    font-family: ${theme.fonts.firaSans};
    margin: 0 auto;
    max-width: ${theme.max_area};
    padding: ${theme.padding_area};
    height: 100%;
    position: relative;/* 
    @media (min-width: 1024px) {
    justify-content: left;
  } */
`

export const TextArea = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  text-align: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: calc(100% - 100px);
    justify-content: center;
  }

    h1 {
      font-size: 32px;
      text-align: center;

      @media (min-width: 1024px) {
        font-size: 40px;
        line-height: 1.1;
        max-width: 65%;
        margin-bottom: 20px;
      }
    }
    h2 {
      font-size: 18px;
      text-align: center;

      @media (min-width: 1024px) {
        font-size: 22px;
        font-weight: 400;
        line-height: 1.1;
        max-width: 400px;
      }
    }
`

export const MeetTheGroup = styled.div`

    position: absolute;
    bottom: 0;

    @media (min-width: 1024px) {
        }
    

    label { 
        /* align-items: center; */
        color: #f5f5f3;
        display: flex;
        line-height: 1.1;
        margin-bottom: 20px;
        justify-content: center;
        @media (min-width: 640px) {
          justify-content: left;
        }

        svg { 
            width: 16px;
            margin-right: 12px;
        }

    }

    ul {
        align-items: center;
        display: flex;
        justify-content: space-around;
        list-style: none;
        margin-bottom: 0;
        padding: 0;
        flex-wrap: wrap;
        position: relative;
        @media (min-width: 1024px) {
        }

        li {
            height: 140px;
            justify-content: center;
            display: flex;
            flex-direction: column;
            background: rgba(0,0,0,.6);
            border-left: 2px solid ${theme.fonts.black};
            flex-basis: 50%;
            width: 150px;
            @media (min-width: 1024px) {
              flex-basis: 0;
            }

            label {
                font-family: ${theme.fonts.default};
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 0px;
            }

            p {
                font-family: ${theme.fonts.default};
                font-size: 14px;
                font-weight: 400;
                margin-top: 5px;
                text-align: center;
                @media (min-width: 1024px) {
                  font-size: 16px;
                }
            }

            &:last-child {                
                border-right: 2px solid ${theme.fonts.black};
            }
        }
    }
`
