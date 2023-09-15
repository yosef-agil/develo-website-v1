import { Row, Col, Container, Form, Button} from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="homePage">

        <header className="w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1>Over 75+ company use our Services</h1>
                <p>We are a agency team that helps more than 75+ company startups and medium to small enterprises for their website or mobile applications</p>
                <Form action="">
                <Row>
                  <Col xs="auto">
                    <Button type="submit">Lets Discuss</Button>
                  </Col>
                  <Col xs="auto">
                    <Button type="submit">Send a Quote</Button>
                  </Col>
                </Row>
                </Form>
              </Col>
              <Col>
              <div className="box">
                <img className="elipsis-bg" src="/src/assets/img/elipsis-bg.svg" />
              </div>
              </Col>
            </Row>
          </Container>
        </header>

    </div>
  )
}

export default LandingPage