import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
  
function App() {
  
    // Collapse isOpen State
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
        <div style={{
            display: 'flow', width: "100%", padding: 30
        }}>
            <Navbar style={{ backgroundColor: '#145DA0' }} light expand="lg" >
                <NavbarBrand href="/">Comic Store</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/LogginComic">Iniciar sesion</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/RegistroComic">Registrarse</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}
  
export default App;