import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Header.module.css';

const Header = () => {
  return(
      <Container>
          <Row>
              <Col xs={12}>
                  <header className={style.header}>
                      <img src="/images/logo2.png" alt=""/>
                  </header>
              </Col>
          </Row>
      </Container>

  );
};export default Header;