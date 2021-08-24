import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {
    Navbar,
    Nav,
    Dropdown
} from 'react-bootstrap'
<<<<<<< HEAD
import Search from './search/search'
=======
<<<<<<< HEAD
import Search from './search/search'
=======
import Search from './search/search-async'
>>>>>>> 8c89402 (Async and without Typehead Bootstrap 5 search)
>>>>>>> 9b7df9b (Async and without Typehead Bootstrap 5 search)
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

const header = () => {
    return (
            <Navbar className="bg-light rounded" expand="lg">
                <div className="container-fluid">
                    <LinkContainer to="/">
                        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mr-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/service">
                                <Nav.Link>Service</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <Search/>
                    </form>
                    <div>
                        <Dropdown className="text-end">
                            <DropdownToggle className="dropdown-menu-lg-end text-decoration-none" variant="none" id="dropdown-menu-align-responsive-1">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                            </DropdownToggle>
                            <DropdownMenu className="text-small dropdown-menu-lg-end">
                                <DropdownItem href="/new">New project...</DropdownItem>
                                <DropdownItem href="/profile">Profile</DropdownItem>
                                <DropdownItem href="/settings">Settings</DropdownItem>
                                <hr className="dropdown-divider" />
                                <DropdownItem href="/logout">Sign out</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </Navbar>
    )
}

export default header
