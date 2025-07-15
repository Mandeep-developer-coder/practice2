import { Container,Navbar,Nav,Col,Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"
export const NavbarOwner =()=>{
    return(
         <Navbar className="bg-light shadow-sm" expand="lg" >
<Container>
    <Navbar.Brand  as={Link} to="/" className="fw-bold"> <img src={assets.logo} alt="Logo"></img></Navbar.Brand>
    <p>Welcome kaur</p>
</Container>
         </Navbar>
    )
}