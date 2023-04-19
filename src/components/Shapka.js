import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { NavLink} from 'react-router-dom';
import AuthService from '../services/Auth.service';

function Shapka() {
  const isLoggedIn = AuthService.isLoggedIn();
  const handleLogout = () => {
    AuthService.logout();
    window.location.href = '/';
  }
  return (
    <>
      <Navbar style={{backgroundColor: "#9A1656"}} variant="dark">
        <Container>
          <p className="shapkalogo">BUYF</p>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' exact>Главная</Nav.Link>
            <Nav.Link as={NavLink} to='/catalog'>Каталог</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>О нас</Nav.Link>
          </Nav>
          {isLoggedIn ? (
           <Button variant="light" onClick={handleLogout} style={{marginRight: "1%", position: "absolute", right: "13%"}}>Выйти</Button>
        ) : (
          <>
            <Button variant="light" href='/auth' style={{marginRight: "1%", position: "absolute", right: "13%"}}>Войти</Button>
            <Button variant="outline-light" href='/register' style={{position: "absolute", right: "2%"}}>Зарегистрироваться</Button>
          </>
        )}
        </Container>
      </Navbar>
    </>
  );
}

export default Shapka;