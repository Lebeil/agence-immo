import React from 'react';
import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBCollapse, MDBIcon
} from "mdbreact";

const Navbar = () => {
    return (
        <div>
            <MDBNavbar color="indigo" dark expand="md">
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <div className="nav-link">
                                <MDBIcon icon="home" className="mr-1"/>
                                Home
                            </div>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    );
};

export default Navbar;
