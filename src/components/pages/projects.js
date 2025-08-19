import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; import "./projectstyles.css";

const removeLinkStyling = {
    textDecoration: 'none',
    color: '#000000',
}

const Projects = () => {
    return (
        <Container>
            <h2 style={{textAlign: 'center'}}>Projects!</h2>
            <br/>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card className="card-shadow" style={{ width: '18rem', backgroundColor: '#E0F7FF', align: 'center' }}>
                        <Card.Link href="https://uvicwecs.ca/" style={removeLinkStyling}>
                            <Card.Body>
                                <Card.Title>WECS Website</Card.Title>
                                <Card.Text>
                                    A website I created and manage for the Women in Engineering and Computer science club at the University of Victoria.
                                </Card.Text>
                                <button className='tech-btn' size="sm">
                                    React
                                </button>
                                <button className='tech-btn' size="sm">
                                    JavaScript
                                </button>
                                <button className='tech-btn' size="sm">
                                    CSS
                                </button>
                                <button className='tech-btn' size="sm">
                                    HTML
                                </button>
                                <button className='btn-status' size="sm">
                                    Ongoing
                                </button>

                            </Card.Body>
                        </Card.Link>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card className="card-shadow" style={{ width: '18rem', backgroundColor: '#E0F7FF', align: 'center' }}>
                        <Card.Link href="https://github.com/charliharrold/calculator-example" style={removeLinkStyling}>
                            <Card.Body>
                                <Card.Title>Overcomplicated Calculator</Card.Title>
                                <Card.Text>
                                    A proof of concept project I created as a base design for a skills workshop to be run by WECS.
                                    The project involves designing a basic calculator interface and connecting it to a back end where calculations are done.
                                </Card.Text>
                                <button className='tech-btn' size="sm">
                                    React
                                </button>
                                <button className='tech-btn' size="sm">
                                    JavaScript
                                </button>
                                <button className='tech-btn' size="sm">
                                    Python
                                </button>
                                <button className='tech-btn' size="sm">
                                    Flask
                                </button>
                                <button className='btn-status' size="sm">
                                    Complete
                                </button>

                            </Card.Body>
                        </Card.Link>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center align-items-center">
                    <Card className="card-shadow" style={{ width: '18rem', backgroundColor: '#E0F7FF', align: 'center' }}>
                        <Card.Link href="https://github.com/charliharrold/ssi_project" style={removeLinkStyling}>
                            <Card.Body>
                                <Card.Title>Simple Shell Interpreter</Card.Title>
                                <Card.Text>
                                    Building from an assignment for CSC 360: Operating Systems. I implemented features such as using arrows for command history and command completion.
                                </Card.Text>
                                <button className='tech-btn' size="sm">
                                    C
                                </button>
                                <button className='btn-status' size="sm">
                                    In Progress
                                </button>
                            </Card.Body>
                        </Card.Link>
                    </Card>
                </Col>
            </Row>

            <br/>

            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card className="card-shadow" style={{ width: '18rem', backgroundColor: '#E0F7FF', align: 'center' }}>
                        <Card.Link href="" style={removeLinkStyling}>
                            <Card.Body>
                                <Card.Title>Napier Commission - Natural Language Processing</Card.Title>
                                <Card.Text>
                                    Extracing text from a historical document and processing it using techniques for natural language.
                                    I then created graphs and other figures to show sentiment analysis.
                                </Card.Text>
                                <button className='tech-btn' size="sm">
                                    Python
                                </button>
                                <button className='btn-status' size="sm">
                                    In Progress
                                </button>
                            </Card.Body>
                        </Card.Link>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center align-items-center">
                    <Card className="card-shadow" style={{ width: '18rem', backgroundColor: '#E0F7FF', align: 'center' }}>
                        <Card.Link href="" style={removeLinkStyling}>
                            <Card.Body>
                                <Card.Title>WECS Logo - Computer Graphics</Card.Title>
                                <Card.Text>
                                    This project hasn't been started yet, but I plan to create a gif of the WECS logo rotating using rasterization learned in CSC 305: Computer Graphics.
                                </Card.Text>
                                <button className='tech-btn' size="sm">
                                    C++
                                </button>
                                <button className='btn-status' size="sm">
                                    Not Yet Started
                                </button>
                            </Card.Body>
                        </Card.Link>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center align-items-center">
                    <Card className="card-shadow" style={{ width: '18rem', backgroundColor: '#E0F7FF', align: 'center' }}>
                        <Card.Link href="" style={removeLinkStyling}>
                            <Card.Body>
                                <Card.Title>Graph Algorithm Simulations</Card.Title>
                                <Card.Text>
                                    I plan to create visualizations for graph algorithms presented in CSC 225 and 226.
                                </Card.Text>
                                <button className='tech-btn' size="sm">
                                    React
                                </button>
                                <button className='tech-btn' size="sm">
                                    D3
                                </button>
                                <button className='btn-status' size="sm">
                                    Not Yet Started
                                </button>
                            </Card.Body>
                        </Card.Link>
                    </Card>
                </Col>
            </Row>

        </Container >
    );
};

export default Projects;
