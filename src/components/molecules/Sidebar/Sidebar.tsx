import { Content, Selectors, MenuItems, DropdownLine, DropdownArea, Button, Mark, Icon, IconSection} from './Sidebar.styles';
import Link from 'next/link';
import MenuData from '~/data/menu.json';
import { useState } from 'react';
import { icDown , icUp, icMark, icBars } from '~/assets/fontAwesome';

const Sidebar = () => {

  const [ openDropdown , setDropdownOpen] = useState('')

  const [showSidebar, setShowSidebar] = useState(false)

  const MenuPt = MenuData['pt-BR']

  const Toggle = () => {
    setShowSidebar(!showSidebar)
  }


  return (
    <Content>
        <Icon onClick={() => Toggle()}>{icBars}</Icon>
      { showSidebar ? (
      <Selectors>
        <Mark onClick={() => Toggle()}>{icMark}</Mark>
      {
        MenuPt && MenuPt.map((menuItem, i) => {
          const isDropdown = menuItem.dropdown !== null
          const dropDownContent = menuItem.dropdown && menuItem.dropdown.map((item, i) => {
            return ( 
              <DropdownLine key={i}>
                <Link href={item.link}>{item.title}</Link>
              </DropdownLine> 
            )
          })

          return (
            <MenuItems key={i} color={i === 5 ? 'yellow' : ''}
              onClick={() => setDropdownOpen('')}
              onMouseLeave={() => setDropdownOpen('')}
              onMouseEnter={() => setDropdownOpen(menuItem.title)}
            >
              {isDropdown 
                  ? <>
                      <Button>
                              {menuItem.title}{ openDropdown ? icDown : icUp}
                      </Button>
                      {
                        openDropdown == menuItem.title ? 
                            <DropdownArea>
                                {dropDownContent} 
                            </DropdownArea> 
                        : null
                      }
                    </> 
                  : <Link href={menuItem.link}>{menuItem.title}</Link>}
            </MenuItems>
          )
        })
      }
      </Selectors>
      ) : null}
    </Content>
  )
  }
export default Sidebar;