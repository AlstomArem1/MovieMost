
import "./Home.css";

import MovieList from "../../movieList/MovieList";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {


    Navbar,
    Container,
    NavDropdown,
    Nav,
} from "react-bootstrap";
import MovieDetail from "../MovieDetail.js/MovieDetail";



const Home = () => {
   
    return (
        <>

            <div className="poster">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Button variant="primary" size="lg" active>
                    Primary button
                </Button>{' '}
                <Button variant="secondary" size="lg" active>
                    Button
                </Button>
                <MovieList/>
                <MovieDetail/>
            </div>
        </>
    )
}
export default Home;
