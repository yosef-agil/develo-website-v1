import { Row, Col, Container, Form, Button, Stack} from "react-bootstrap";
import Lottie from "lottie-react";
import devTeams from './devteams.json'
import secServices from './services.json'
// import {useRef} from "react"

const LandingPage = () => {

  // const dsteamRef = useRef<LottieRefCurrentProps>(null)

  return (
    
    <div className="homePage">

        <header className="w-100 min-vh-100">
          <Container>
            <div className="hero-section paddingSection">
              <Row>
                <Col sm className="hero-content">
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
                <Col sm>
                <div className="box">
                  <div className="lottie-wrapper">

                    <Lottie 
                      // onComplete={() => {
                      //   console.log("complete")
                      //   dsteamRef.current?.setDirection(-1)
                      // }}
                      // lottieRef={dsteamRef}
                      // loop={false}
                      animationData={devTeams} 
                    />

                  </div>
                  <img className="elipsis-bg" src="/src/assets/img/elipsis-bg.svg" />
                </div>
                </Col>
              </Row>
            </div>

            <div className="client-logo paddingSection">
              <Row>
                <Col sm><img src="/src/assets/img/c2.png" alt="" /></Col>
                <Col sm><img src="/src/assets/img/c1.png" alt="" /></Col>
                <Col sm><img src="/src/assets/img/c3.png" alt="" /></Col>
                <Col sm><img src="/src/assets/img/c5.png" alt="" /></Col>
                <Col sm><img src="/src/assets/img/c4.png" alt="" /></Col>
                <Col sm><img src="/src/assets/img/c6.png" alt="" /></Col>
              </Row>
            </div>
          </Container>
        </header>
        <section className="whyus-services w-100 min-vh-100">
          <Container>
              <div className="whyus paddingSection">
                <Row>
                  <Col sm className="whyUs-content">
                    <Stack gap={4}>
                      <h4>WHY OUR SERVICES</h4>
                      <h2>We help you to building your website with our expertise </h2>
                      <p>We using Design Thinking method to make a good product for our clients and the users who use the product. in order to reach the goal point of a business</p>
                    </Stack>
                  </Col>
                  <Col sm>
                    <div className="box-2">
                      <Lottie 
                          // onComplete={() => {
                          //   console.log("complete")
                          //   dsteamRef.current?.setDirection(-1)
                          // }}
                          // lottieRef={dsteamRef}
                          loop={true}
                          animationData={secServices} 
                        />
                    </div>
                  </Col>
                </Row>
              </div>  
          </Container>
        </section>

    </div>
  )
}

export default LandingPage