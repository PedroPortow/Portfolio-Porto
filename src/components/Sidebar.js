import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,} from './SiderbarElements'


function Sidebar({isOpen, toggle}) {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home"  onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to="sobre"onClick={toggle}>
                    Sobre
                </SidebarLink>
                <SidebarLink to="projetos" onClick={toggle}>
                    Projetos
                </SidebarLink>
                <SidebarLink to="habilidades" onClick={toggle}>
                    Habilidades
                </SidebarLink>
                <SidebarLink to="contato" onClick={toggle}>
                    Contato
                </SidebarLink>
            </SidebarMenu>
          
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar