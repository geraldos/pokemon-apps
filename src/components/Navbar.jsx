import React from "react";
import { NavLink } from "react-router-dom";
import { mq_min_width, mq_max_width } from "../libs/common/MediaQueris";
import styled from '@emotion/styled';

const Header = styled.header`
    ${mq_min_width[6]} {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    min-height: 40px;
    transition: min-height 0.3s;
    background-color: #be0000;
`;

const HeaderInner = styled.div`
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

const HeaderTitle = styled.h1`
    font-weight: 150;
    font-size: 3em;
    margin: 0.5em 0.25em;
    display: inline-block;
    color: white;
`;

const HeaderMenu = styled.a`
    ${mq_min_width[2]}{
        display: none;
    }
    ${mq_min_width[3]}{
        display: none;
    }
    font-size: 32px;
    text-align: center;
    display: block;
    width: 60px;
    height: 60px;
    margin: auto;
    color: black !important;
`;

const Nav = styled.nav`
    ${mq_max_width[1]} {
        z-index: 10;
        background-color: #be0000;
        width: 300px;
        position: absolute;
        -webkit-transform: translate(-300px, 0);
        transform: translate(-300px, 0);
        transition: transform 0.3s ease;
    }
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    a:hover {
        text-decoration: underline;
        color: #000;
    }
`;

const NavList = styled.ul`
    ${mq_min_width[5]} {
        max-width: 600px;
        margin: 0 auto;
    }
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
`;

const NavItem = styled.li`
    ${mq_max_width[2]} {
        display: list-item;
        border-bottom: 1px solid #E0E0E0;
        width: 100%;
        text-align: center;
    }
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    line-height: 50px;
    text-transform: uppercase;
`;

const NavAHref = styled.a`
    display: inline-block;
    padding: 1.3em;
    text-decoration: none;
    color: white;
`;

let open;
function clickDrawer() {
    document.getElementById("drawer").style.webkitTransform = 'translate(0px, 0px)';
    document.getElementById("drawer").style.transform = 'translate(0px, 0px)';

    setTimeout(() => {
        open = false;
    }, 200);

    if(open === false) {
        document.getElementById("drawer").style.webkitTransform = 'translate(-300px, 0px)';
        document.getElementById("drawer").style.transform = 'translate(-300px, 0px)';
        setTimeout(() => {
            open = true;
        }, 200);
    };
};

function Navbar() {
    return(
        <div>
            <Header>
                <HeaderInner>
                    <HeaderTitle>PokemonApps</HeaderTitle>
                </HeaderInner>
                <HeaderMenu id="burger" onClick={clickDrawer}>☰</HeaderMenu>
                <Nav id="drawer">
                    <NavList>
                        <NavItem style={{ marginTop: '10px' }}>
                            <NavLink to="/" className={NavAHref} style={{ margin: '0px 30px 0px 30px', paddingTop: '10px', textDecoration: 'none', color: 'white'}}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/my_pokemon" style={{ margin: '0px 30px 0px 30px', paddingTop: '10px', textDecoration: 'none', color: 'white'}}>My Pokemon</NavLink>
                        </NavItem>
                    </NavList>
                </Nav>
            </Header>
        </div>
    );
};

export default Navbar;