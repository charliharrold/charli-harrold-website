import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resume from "../../resources/resume.pdf";
import { BsFileEarmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./aboutstyles.css";


const wrapText = {
    textAlign: "left",
    float: "left",
    width: "0",
    height: "0",

};

const borderIn = {
    //border: "10px solid white",
    padding: "0px 0px 0px 5px",
}


const imageStyle = {
    float: "right",
    clear: "right",
    frameborder: "0",
    scrolling: "no",
}

const About = () => {
    return (
        <div>
            <div style={wrapText}> </div>

            <Container>
                <a href="https://uvicwecs.ca/">
                    <h2><BsFileEarmark /></h2>
                </a>



                <h2 style={borderIn}>
                    Hello! My name is Charli and I'm a 4th year Computer Science and Math Honours student at the University of Victoria.
                </h2>
                <p style={borderIn}>

                    I wasn't always interested in computer science! In fact, when I started at UVic I was dreading the 1 computer science course that was required for my program.<br />
                    However, at the end of my first year I realized that the introductory computer science course was my favourite! So, on a slight whim, I decided to switch into the computer science program, and I've been loving it ever since.
                </p>

                <Card className='about-card-shadow about-card'>
                    <Card.Title>
                        Advocacy
                    </Card.Title>
                    <Card.Text>
                        As a woman in a male dominated field, it's important for me to be educated about feminism, advocacy,
                        and intersectionality. I am driven by my desire to encourage young women to stay in STEM, and making STEM a safer and more inclusive space.

                    </Card.Text>
                </Card>

                <br />


                <h3 style={borderIn}>
                    Work Experience
                </h3>
                <Row style={{ alignItems: 'center' }}>
                    <Col className='align-items-center'>
                        <Card className='about-card-shadow about-card' style={{ width: '70rem', backgroundColor: '#FFE3FB', align: 'center' }}>
                            <Card.Title>Software Developer Co-op - Ocean Networks Canada</Card.Title>
                            <Card.Text>
                                I worked at Ocean Networks Canada from September 2024 to April 2025. My time there was spent working on the New Features team where I worked on the Oceans 3.0 Dashboards.
                                I had never worked with JavaScript before this co-op, and my work was almost entirely JavaScript! I learned a lot during my time there.
                                <br />
                                The work I'm the most proud of was redesigning the Latest Readings Widget.
                                The goal was to update the API service call used by the latest readings widget to align it with the other widgets.
                                Unfortunately, the structure of the code for the latest readings widget didn't allow for the new API service to be used.
                                So, I proposed an entire redesign of the widget... and my supervisor was on board! I had to make new components that included features we already had and new features.
                                I also wrote a script to update the saved widget configurations in the database so that they would be compatible with the new widget.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Card className='about-card-shadow about-card'>
                    <Card.Title>Work Study Database Assistant - UVic Centre for Accessible Learning</Card.Title>
                    <Card.Text>
                        My first technical work experience was my Work Study position as a Database Assistant at the
                        Centre for Accessible Learning (CAL) at UVic.
                        This role certainly threw me into the deep end! I had never worked with databases before, so trying to figure
                        out this big real world database was really difficult. Luckily, my supervisor cultivated a wonderful
                        work environment where I was encouraged to figure things out on my own, and supported when I asked for help.
                        <br></br>
                        <br></br>
                        My biggest project in this role was making an automatic check that would email students if their exams
                        were scheduled in such a way that their academic accommodations wouldn't be met. This involved some database SQL stuff,
                        some C# stuff, and some HTML email formatting stuff!
                    </Card.Text>
                </Card>
                <br />
                <h2>Volunteering</h2>
                <Card className='about-card-shadow about-card'>
                    <Card.Title>Women in Engineering and Computer Science (WECS)</Card.Title>
                    <Card.Text>
                        In October 2023 I joined the reviving of WECS at UVic as the Academia Director. In my first two months,
                        I organized 3 final exam review sessions and ran 1 review session myself. In my second semester as Academia Director
                        I organized 5 more final exam review sessions. My role required organizing volunteers, contacting professors,
                        and communicating within WECS to ensure that all review sessions go smoothly.
                    </Card.Text>
                </Card>
                <br />
                <Card className='about-card-shadow about-card'>
                    <Card.Title>Women in Science Peer Mentor</Card.Title>
                    <Card.Text>
                        I also volunteered with the UVic Women in Science Peer Mentorship Program as a mentor in my 3rd year of university.
                        Additionally, I was a volunteer for the faculty of engineering and computer science welcoming events in Fall 2023.
                    </Card.Text>
                </Card>
                <br />
                <Card className='about-card-shadow about-card'>
                    <Card.Title>Aunt Leah's Place</Card.Title>
                    <Card.Text>
                        Throughout high school I volunteered with <a href="https://auntleahs.org/">Aunt Leah's Place</a>, an organization that
                        supports youth in foster care. I volunteered in their thrift store starting when I was 14 and it was a wonderful experience.
                        By the end of high school, I'd spent over 500 hours volunteering with Aunt Leah's.
                    </Card.Text>
                </Card>
                <br />
            </Container>

        </div>
    );
};

export default About;