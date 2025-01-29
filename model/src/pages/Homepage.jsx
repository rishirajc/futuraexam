import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function Homepage() {
  
  return (
   

  <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Event Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
               <Link to={'/event'}><Nav.Link href="#features">Event Details</Nav.Link></Link> 
               
                <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                 <Link to={'/pro'}> <NavDropdown.Item href="#action/3.1">User Profile</NavDropdown.Item></Link>
                 <Link to={'/list'}><NavDropdown.Item href="#action/3.2">
                   Event list
                  </NavDropdown.Item></Link> 
                 <Link to={'/about'}><NavDropdown.Item href="#action/3.2">
                  About
                  </NavDropdown.Item></Link> 
               
                 
                </NavDropdown>
              </Nav>
              <Nav>
           
                <Nav.Link eventKey={2} href="#memes">
             <Link to={'/delete'}> logout</Link>  
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


<div>
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://marketplace.canva.com/EAFFU2qRop8/1/0/1600w/canva-gray-circle-leaf-wedding-event-planner-logo-G5ftfF41WNw.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://marketplace.canva.com/EAFEUinJeVA/1/0/1600w/canva-rose-gold-brush-glitter-feminine-boutique-circle-logo-fzFneEVWIqU.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dribbble.com/users/2398989/screenshots/6597610/presentation_dark2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
</>
);

   
    }

    


export default Homepage
