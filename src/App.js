import React from 'react';
import {Button ,Alert,Accordion,Badge, Navbar, Container} from 'react-bootstrap';
import Conter from './Conter';
import Register from './Register';
import UserList from './UserList'
let App = () => {
  return (
    <>
      <Navbar bg='dark' expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>
            react
          </Navbar.Brand>
        </Container>  
      </Navbar>
      {/* <Conter/> */}
      {/* <Register/> */}
      <UserList/>
    </>
  
  );
}

export default App;
   
 


