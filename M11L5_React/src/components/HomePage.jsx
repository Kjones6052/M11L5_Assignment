

// Import as needed
import { Button, Container, Image, Row, Col } from 'react-bootstrap';
import welcomeImage from '../assets/welcomeImage.jpg'
import { useNavigate } from 'react-router-dom';

// Functional Component to display 'Home Page'
function HomePage() {
    const navigate = useNavigate();
    return (
        <Container className="text-center text-white"> 
            <Row>
                <Col>
                    <h2>Atari 400 Mini</h2>
                    <p><strong>
                        The Atari 400 Mini is a nostalgic blast from the past, reinvented for modern times. It's a compact version of the iconic Atari 
                        400, known for its role in the 8-bit computing era. This miniaturized device is not just about looks; it emulates a range of 
                        Atari systems, including the entire 8-bit line-up and the Atari 5200 console. The 400 Mini comes equipped with a recreated 
                        CXStick joystick, enhancing the classic gaming experience with additional function buttons and USB connectivity.
                        </strong></p>

                    <div className="card align-items-center bg-primary text-white m-4 p-4">
                        <p className="display-5 text-align-center"><span>&darr;</span> Buy your Atari 400 Mini Today <span>&darr;</span></p>
                        <Image src={welcomeImage} roundedCircle={true} fluid={true} />
                        <Button variant='primary' onClick={() => navigate('*')} className="custom-button btn-lg bg-secondary border-white p-3 mb-5" >
                            Shop Now!
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

// Export
export default HomePage;