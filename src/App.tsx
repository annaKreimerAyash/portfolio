
//import './App.css';
import classes from './main.module.css';
import mepic from './images/pinkme.png';
// import annaLogo from './images/logo-a-trans.svg';
// import upArrow from './images/arrow-up.svg';
import githubImg from "./images/github.svg";
import linkedinImg from "./images/linkedin.svg";
// import Section from './components/Section';
import Project from './components/Project';
import projectsData from './components/projects.json';
import cv from '/AnnaAyash.pdf';

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
      <Container fluid className="d-flex flex-column vh-100">
        {/* <Navbar expand="lg" className={`bg-body-tertiary ${classes.pinktext}`}> */}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand className={classes.pinktext} href="#home">Anna's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className={classes.pinktext} href="#about">About</Nav.Link>
              <Nav.Link className={classes.pinktext} href="#projects">Projects</Nav.Link>
              <Nav.Link className={classes.pinktext} href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid className="d-flex flex-column vh-100 justify-content-center align-items-center">
          <Row className="justify-content-center align-items-center">
            <Col xs={9} md={4}>
              <Image src={mepic} fluid />
            </Col>
            <Col xs={9} md={4}>
              {/* <Image src={annaLogo} alt="Anna logo" width="20%" /> */}
              <div className="text-center">
                <h1 className={classes.bb}>Anna Ayash</h1>
                <h2>Full stuck Developer</h2>
              </div>
              <div className="mt-4 d-flex justify-content-center gap-3">
                <a className="btn btn-outline-dark  rounded-pill" href={cv} download>Download CV</a>
                <Button className="rounded-pill" variant="dark">Contact Info</Button>
              </div>
              <div className="mt-4 d-flex justify-content-center gap-3">
                <a href="https://github.com/annaKreimerAyash/portfolio" title="View Source Code" target="_blank">
                  <Image src={githubImg} alt="GitHub" className={classes.imgvw} />
                </a>
                <a href="https://linkedin.com/in/annakayash" title="Anna's LinkedIn Profile" target="_blank">
                  <Image src={linkedinImg} alt="LinkedIn" className={classes.imgvw} />
                </a>
              </div>
            </Col>
          </Row>
          {/* <Col xs={6} md={4}>
          <a target="_blank">
            Visit Isracard Site <span>→</span>
          </a>
        </Col> */}
        </Container>
      </Container>
      <Container id='about' fluid className="vh-100 justify-content-center align-items-center">
        <Row className="justify-content-center">
          <Col md={9}>
            <h2 >About Me</h2>
            <p className="fs-5">Passionate <b>Full stuck Developer</b> with 5 years of experience developing dynamic web applications with
              <b> JavaScript, React.js </b>and <b>.Net</b>.<br /> Proficient in creating seamless, scalable, and maintainable code
              and improving <b>user experiences.</b><br /> Collaborating effectively with cross-functional teams to deliver <b>high-quality projects</b> on time
              And adept at optimizing processes, driving <b>cost savings</b>, and mentoring junior developers.</p>
            <h4 className="my-5">My Skills</h4>
            <Row className="justify-content-center">
              {imagesVite.map((i, j) => (
                <Col xs={4} md={3}>
                  <Image key={j} src={i} fluid />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container id='projects' fluid className="vh-100 justify-content-center align-items-center">
        <Row className="justify-content-center">
          <Col lg="9">
            <h2>Projects</h2>
            {projects.map((pro, i) => (
              <Row key={'s' + i} className={`border rounded border-dark ${classes.padHalf} ${classes.margHalf}`}>
                <Project key={'proj' + i} projects={pro} />
              </Row>
            ))}
          </Col>
        </Row>
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