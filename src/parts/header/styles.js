import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import styled from 'styled-components'


export const NavBar = styled(Navbar)`
    font-family: 'Megrim', cursive;
    padding-right: 5%;
    background-color: black !important;
`;

export const NavDropdownItem = styled(NavDropdown.Item)`
    font-family: 'Montserrat', sans-serif;
`;

export const Brand = styled(Navbar.Brand)`
    font-size: 2em;
    letter-spacing: 0.105em;
`;

export const AvatarDropdown = styled(NavDropdown)`
    
    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Avatar = styled.div`
    width: 2em;
    height: 2em;
    background-color: white;
    border-radius: 50%;
`;

export const NavLinks = styled(Nav)`
    justify-content: space-between;
    width: 60%;
`;