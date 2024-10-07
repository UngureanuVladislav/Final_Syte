import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/img/logoExpressFood.png';
import '../../assets/styles/nav.css';
import { AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <Navbar className='p-0 navbar color-white position-relative' expand='lg' fixed='top'>
      <Container className='p-0 h-100 container-lg' fluid>
        <Navbar.Brand className='h-100 ps-2 ps-md-5 navbar-brand' href='#home'>
          <Link to='/'>
            <Image className='logo-img' src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className='me-2' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='color-white px-1'>
          <Nav className='mx-auto nav-link text-uppercase'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
            <Nav.Link as={Link} to='/menu'>Menu</Nav.Link>
            <Nav.Link as={Link} to='/contacts'>Contacts</Nav.Link>
          </Nav>
          <a href='tel:+37360873461' className='d-sm-none dotted-circle d-lg-flex justify-content-center align-items-center ms-md-2 ms-xl-0'>
            <AiOutlinePhone size='30px' />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}