import { Container, Menu, Li } from "./style"


import Logo from "../../assets/logo.png"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"


function Header() {
    const [changeBackground , setChengeBackground] = useState(false) // efeito scroll
    const { pathname } = useLocation()

    window.onscroll = () => {  // efeito scroll
        
        if(!changeBackground && window.pageYOffset > 150){
            setChengeBackground(true)
        }
        if(changeBackground && window.pageYOffset <= 150){
            setChengeBackground(false)
        }

    }

    console.log(pathname)
    return (
        <Container changeBackground={changeBackground}>
            <img src={Logo} alt="logo" />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to={'/'}>Menu</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to={'/filmes'}>Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to={'/series'}>Séries</Link>
                </Li>

            </Menu>
        </Container>
    )
}

export default Header