
//import './App.css';
import classes from './main.module.css';
import mepic from './images/pinkme.png';
import annaLogo from './images/logo-a-trans.svg';
// import upArrow from './images/arrow-up.svg';
import githubImg from "./images/github.svg";
import linkedinImg from "./images/linkedin.svg";
import Section from './components/Section';
import Project from './components/Project';
import projectsData from './components/projects.json';

// import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// npm install @types/node --save-dev    //  npm i @types/webpack-env -D

const imagesVite = Object.values(import.meta.glob<string>('./images/skills/*.{png,jpg,jpeg,PNG,JPEG,svg}', {
  eager: true,
  query: '?url',
  import: 'default'
}));

let projects = projectsData;

function App() {

  //const [isScroll, setIsScroll] = useState(false);
  return (
    // <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
    <>
      <Container fluid className={classes.full}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#home">Anna's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Row className="justify-content-md-center align-items-center"> */}
        <Row className="justify-content-md-center align-items-center h-100">
          <Col xs lg="4">
            <Image src={mepic} fluid />
          </Col>
          <Col xs lg="4">
            <Image src={annaLogo} alt="Anna logo" width="20%" />
            <h1>Anna Ayash</h1>
            <h2>Frontend Developer</h2>
            <Button className="rounded-pill ms-5" variant="outline-dark">Download CV</Button>
            <Button className="rounded-pill ms-3" variant="dark">Contact Info</Button>
            <Row>
              <Col>
                <a href="https://github.com/annaKreimerAyash/portfolio" title="View Source Code" target="_blank" className="my-3">
                  <Image src={githubImg} alt="GitHub" width="15%" />
                </a>
              </Col>
              <Col>
                <a href="https://linkedin.com/in/annakayash" title="Anna's LinkedIn Profile" target="_blank">
                  <Image src={linkedinImg} alt="LinkedIn" width="15%" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Col xs={6} md={4}>
          <a target="_blank">
            Visit Isracard Site <span>→</span>
          </a>
        </Col> */}
      </Container>

      <Container fluid className={classes.full}>
        <Row className="align-items-center h-100">
          <section id='about'>
            <Section sectionName={'About'}>
              <p>Passionate Frontend Developer with 4+ years of experience designing and developing dynamic, user-centric web applications.
                Proficient in React.js, JavaScript, HTML5, CSS3, and responsive design. Known for creating seamless, scalable, and maintainable code,
                improving user experiences, and collaborating effectively with cross-functional teams to deliver high-quality projects on time.
                Adept at optimizing processes, driving cost savings, and mentoring junior developers.</p>
              <h4>My Skills</h4>
              <div>
                {imagesVite.map((i, j) => (
                  <Image key={j} src={i} fluid width="15%" />
                ))}
              </div>
            </Section>
          </section>
        </Row>
      </Container>
      <Container fluid className={classes.full} id='projects'>
        {/* <section id='projects'>
          <> */}
        {projects.map((pro, i) => (
          <Row className="h-100">
            <Section key={'s' + i} sectionName={`# ${i + 1} Project`}>
              <Project key={'p' + i} projects={pro} />
            </Section>
          </Row>
        ))}
        {/* </>
      </section> */}
      </Container>

      {/* <a href='#top' className={isScroll? classes['back-to-top'] : classes.hidden} onClick={!isScroll}> */}
      {/* {isScroll && <a href='#top' className={classes['back-to-top']}>
        <img src={upArrow} alt="back-to-top" />
      </a>} */}
      {/* <a href='#top' className={classes['back-to-top']}> */}


      {/* <a href='#top' className={classes.arrowTop}>
        <img src={upArrow} alt="back-to-top" />
      </a> */}
    </>

    // </ThemeProvider>

  )
}

export default App
