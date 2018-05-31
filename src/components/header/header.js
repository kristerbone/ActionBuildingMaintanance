import React, { Component } from 'react';
import { Container, Row, Col, Media  } from 'reactstrap';
import logo from '../../images/header_logo.png';

class Header extends Component {
  render() {
    return (
      <Container className="sd-header mb-1">
        <Row>
          <Col lg="3" className="sd-header-logo"><a href="/"><Media object src={logo} alt="Action Building Maintenance"/></a></Col>          
          <Col lg="7" className="mt-1">
            <Container>
              <Row>
                  <Col className="sd-header-text">Action Building Maintenance</Col>
              </Row>
              <Row>
                <Col className="sd-header-sub-text"><i>No task too small or large!<br/>No Hidden costs</i></Col>
              </Row>
            </Container>
          </Col>
          <Col lg="2" className="sd-header-phone">
              <a className="btn btn-danger float-right align-top hidden-md-up" href="tel:01382 520 286">Telephone: 01382 520 286</a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
