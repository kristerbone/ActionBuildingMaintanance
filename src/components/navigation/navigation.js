import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink  } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {isOpen: false};
    }
    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <Navbar light expand="sm" className="pl-0">
                <NavbarToggler onClick={this.toggle} className="mr-auto"/>
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#">Joinery</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Eletrics</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Plumbing</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Tiling</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Property</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Contact</NavLink>
                    </NavItem>                                                                
                </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;

