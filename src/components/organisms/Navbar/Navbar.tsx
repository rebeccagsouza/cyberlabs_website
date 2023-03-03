import Image from 'next/image'
import Link from 'next/link';
import MenuData from '~/data/menu.json'
import { useState } from 'react';
import { cyberlabsLogo } from '~/assets/img'
import { Wrap, Content, Selectors, Logo, MenuItems, Button, DropdownArea, DropdownLine, Icon, IconSection, Sidebar } from "../Navbar/Navbar.styles"
import { icDown , icUp, icBars } from '~/assets/fontAwesome';
import Sidebars from '~/components/molecules/Sidebar/Sidebar'

const Navbar = () => {

    const [ openDropdown , setDropdownOpen] = useState('')
    const MenuPt = MenuData['pt-BR']

    
    const [showSidebar, setShowSidebar] = useState(false)

    const ShowSidebar = () => {
      setShowSidebar(!showSidebar)
    }

    
    console.log(showSidebar)

    return (
      <Wrap >
        <Content>
          
          <Link href='/'>
            <Logo>
              <Image 
                src={cyberlabsLogo}
                alt="Logo CyberLabs"
                width={170}
                height={22}
              />
            </Logo>
          </Link>

          <Selectors>
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
          {/* <IconSection>
              <Icon onClick={!ShowSidebar}>{icBars}</Icon>
          </IconSection> */}
          <Sidebars/>
        </Content>
      </Wrap>
    );
  };

  export default Navbar;