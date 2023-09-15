import { Row, Col, Container, Form, Button, Stack} from "react-bootstrap";
import Lottie from "lottie-react";
import animationData from './Hero-section2.json'

const LandingPage = () => {

  return (
    
    <div className="homePage">

        <header className="w-100 min-vh-100">
          <Container>
            <Row>
              <Col className="hero-content">
                <Stack gap={4}>
                  <h1>Over 75+ company use our Services</h1>
                  <p>We are a agency team that helps more than 75+ company startups and medium to small enterprises for their website or mobile applications</p>
                  <Form action="">
                  <Row className="cta-btn">
                    <Col xs="auto">
                      <Button type="submit">Lets Discuss</Button>
                    </Col>
                    <Col className="secondarybtn" xs="auto">
                      <Button type="submit">Send a Quote</Button>
                    </Col>
                  </Row>
                  </Form>
                </Stack>
              </Col>
              <Col>
              <div className="box">
                <div className="lottie-wrapper">
                  <Lottie animationData={animationData} />
                </div>
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