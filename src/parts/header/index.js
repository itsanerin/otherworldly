import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Brand, NavBar, NavDropdownItem, AvatarDropdown, Avatar, NavLinks } from "./styles";

const Header = () => {
  return (
    <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Brand href="#home">OtherWorldly</Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <NavLinks className = "ml-auto">
      <NavDropdown title="Sacred Circle" id="collasible-nav-dropdown">
        <NavDropdownItem href="#action/3.1">Tarot</NavDropdownItem>
        <NavDropdownItem href="#action/3.2">Zodiac</NavDropdownItem>
        <NavDropdownItem href="#action/3.3">Grimoire</NavDropdownItem>
        <NavDropdownItem href="#action/3.4">Altar</NavDropdownItem>
      </NavDropdown>
      <NavDropdown title="Covens" id="collasible-nav-dropdown">
        <NavDropdownItem href="#action/3.1">Search Covens</NavDropdownItem>
        <NavDropdownItem href="#action/3.2">My Covens</NavDropdownItem>
      </NavDropdown>
      <NavDropdown title="Botanica" id="collasible-nav-dropdown">
        <NavDropdownItem href="#action/3.1">Shops</NavDropdownItem>
        <NavDropdownItem href="#action/3.2">Services</NavDropdownItem>
      </NavDropdown>
      <Nav.Link>Archives</Nav.Link>
      <AvatarDropdown title={<Avatar />} id="collasible-nav-dropdown">
          <NavDropdownItem href="#action/3.1">Profile</NavDropdownItem>
          <NavDropdownItem href="#action/3.2">Grimoire</NavDropdownItem>
          <NavDropdownItem href="#action/3.2">Log Out</NavDropdownItem>
      </AvatarDropdown>
    </NavLinks>
  </Navbar.Collapse>
</NavBar>
  );
}

export default Header;