import React from "react";
import { Navbar, Button, Link } from "@nextui-org/react";

const Nav = () => {
    return (
        <Navbar isBordered variant="floating" className="bg-gray-800 text-white">
            <Navbar.Brand>
                <span className="font-bold text-lg">Wizia</span>
            </Navbar.Brand>

            {/* Navbar Links */}
            <Navbar.Content className="hidden lg:flex">
                <Navbar.Link href="#about">About Us</Navbar.Link>
                <Navbar.Link href="#pricing">Pricing</Navbar.Link>
                <Navbar.Link href="#customers">Customers</Navbar.Link>
                <Navbar.Link href="#solutions">Solutions</Navbar.Link>
            </Navbar.Content>

            {/* Button to book demo */}
            <Navbar.Content>
                <Button auto flat color="primary">
                    Book a Demo
                </Button>
            </Navbar.Content>
        </Navbar>
    );
};

export default Nav;





