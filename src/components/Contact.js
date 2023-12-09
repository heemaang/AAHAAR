import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <>
      <div className="badge" style={{paddingLeft: '30px', paddingTop: '55px'}}>
      <Badge pill bg="success">
          Contact Us  
      </Badge>
      </div>
      <Container  style={{alignItems: 'center', justifyContent: 'center', maxWidth: '1286px', paddingTop: '55px'}}>
      <Row style={{paddingTop: '50px'}}>
        <Col sm={6}><h2>Let's Stay Connected</h2>
        <p>It's never been easier to get in touch with Flex. 
            Call us, use our live chat widget or email and we'll get back to you as soon as possible!</p>
        </Col>
        <Col sm={6} style={{paddingLeft: '60px', paddingBottom: '50px'}}>
            <Button style={{width: '40%', padding: '5px', backgroundColor: '#185013'}}>Open Positions</Button>{'  '}
            <Button variant="outline-success" style={{width: '50%', padding: '5px'}}>About Us</Button>{'  '}</Col>
      </Row>
      <Row>
        <Col sm>
        <Row>
        <Col>
        <Card
          style={{ width: '100%' }}
          className="mb-3">
        <Card.Header>
            <img  src="/images/Outline.png" alt="Email-img"/>
        </Card.Header>
          <Card.Body>
            <Card.Title>
                Email 
            </Card.Title>
            <Card.Text>
              Aahaarfoodhelp2023@gmail.com
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card
          style={{width: '100%' }}
          className="mb-3">
        <Card.Header>
            <img  src="/images/Outline.png" alt="Email-img"/>
        </Card.Header>
          <Card.Body>
            <Card.Title>
                Phone 
            </Card.Title>
            <Card.Text>
              Aahaarfoodhelp2023@gmail.com
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card
          style={{ width: '100%' }}
          className="mb-3">
        <Card.Header>
            <img  src="/images/Outline.png" alt="Email-img"/>
        </Card.Header>
          <Card.Body>
            <Card.Title>
                Office 
            </Card.Title>
            <Card.Text>
            1686, Geraldine Lane,<br /> New York, NY 10013
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card
          style={{ width: '100%' }}
          className="mb-3">
        <Card.Header>
            <img  src="/images/Outline.png" alt="Email-img"/>
        </Card.Header>
          <Card.Body>
            <Card.Title>
                Socials 
            </Card.Title>
            <Card.Text style={{display: 'flex'}}>
              <img src="/images/Instagram.svg" alt="insta-img" style={{padding: '11px'}}/>
              <img src="/images/Facebook.svg" alt="insta-img" style={{padding: '11px'}}/>
              <img src="/images/Twitter.svg" alt="insta-img" style={{padding: '11px'}}/>
              <img src="/images/post linkedin.png" alt="insta-img" style={{padding: '11px'}}/>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
        </Col>
        <Col sm>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control style={{height: '100%'}} as="textarea" rows={4} />
      </Form.Group>
      <Button type="submit" style={{width: '100%', backgroundColor: '#185013'}}>Send</Button>
    </Form>
        </Col>
      </Row>
    </Container>

      
    </>
  )
}

