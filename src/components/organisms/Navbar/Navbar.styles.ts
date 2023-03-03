import styled from 'styled-components'
import { theme } from '~/../styles/globals'

export const Wrap = styled.header`
    align-items: center;
    background: black;
    display: flex;
    flex-direction: row;
    height: 80px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;    
`

export const Content = styled.nav`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
    width: ${theme.max_area};
    padding: ${theme.padding_area};
    z-index: 999;
`

export const Logo = styled.div`
`

export const Selectors = styled.ul`
    display: flex;
    flex-direction: row; 
    display: none;
    @media (min-width: 1024px) {
    display: flex;
    }
`
export const MenuItems = styled.li`
    background-color: ${ (props) => { return props.color === 'yellow' ? theme.colors.yellow : 'black' }};
    display: flex;
    z-index: 999;

    a {
        align-items: center;
        border-bottom: 3px solid transparent;        
        color: ${ (props) => { return props.color === 'yellow' ? 'black' : '#fff '}};
        display: flex;
        font-size: 16px;
        font-weight: 600;
        height: 80px;
        letter-spacing: 0.01em;
        padding: 0 12px;
        transition: all .5s;
        text-decoration: none;

        &:hover {            
            border-bottom: 3px solid white;
        }
    }
`

export const Button = styled.button`
    align-items: center;
    background-color: transparent;
    border-bottom: 3px solid transparent;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-family: ${theme.fonts.default};
    font-size: 16px;
    font-weight: 600;
    height: 80px;
    letter-spacing: 0.01em;
    margin-right: 5px;
    position: relative;
    text-decoration: none;
    transition: all .5s;
    border: none;

    svg { 
        width: 10px;
        margin-left: 5px;
     }
`

export const DropdownArea = styled.ul`
    background-color: black;
    list-style: none;
    padding: 0;
    position: absolute;
    top: 80px;
`
export const DropdownLine = styled.li`
    a {
        width: 200px;
        font-size: 14px;
        border: 1px solid #fff;
        height: initial;
        padding: 10px 12px;

        &:hover {
            color: ${theme.fonts.black};
            background-color: #fff;
            font-weight: 700;
            padding: 10px 12px;
            border-bottom: 1px solid #fff;
        }
    }
`

export const IdiomButton = styled(Button)`
    min-width: 44px;
`
export const Item = styled(Button)`
    display: flex;
    min-width: 44px;
`
export const List = styled.div`
    list-style-type: none;
    height: 200px;
    text-align: center;
`

export const Icon = styled.button`
  width: 50px;
  border: none;
  background-color: #f2b829;
`

export const IconSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: #f2b829;
  @media (min-width: 1024px) {
    display: none;
    }
`
export const Sidebar = styled.div`
`