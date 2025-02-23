
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
          {/* <Navbar expand="lg" className={`bg-body-tertiary ${classes.pinktext}`}> */}
          <Navbar.Brand className={classes.pinktext} href="#home">Anna's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="ms-auto"> */}
            <Nav className="ms-auto">
              <Nav.Link className={classes.pinktext} href="#about">About</Nav.Link>
              <Nav.Link className={classes.pinktext} href="#projects">Projects</Nav.Link>
              <Nav.Link className={classes.pinktext} href="#contact">Contact</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Row className="justify-content-md-center align-items-center h-100"> */}
        <div className="d-flex justify-content-center align-items-center gap-4 h-100">
          <Col xs lg="4">
            <Image src={mepic} fluid />
          </Col>
          <Col xs lg="4">
            {/* <Image src={annaLogo} alt="Anna logo" width="20%" /> */}
            <div className="text-center">
              <h1 className={classes.bb}>Anna Ayash</h1>
              <h2>Frontend Developer</h2>
            </div>
            <div className="mt-4 d-flex justify-content-center gap-3">
              <Button className="rounded-pill" variant="outline-dark">Download CV</Button>
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
        </div>
        {/* <Col xs={6} md={4}>
          <a target="_blank">
            Visit Isracard Site <span>→</span>
          </a>
        </Col> */}
      </Container>

      <Container id='about' fluid className={classes.full}>
        <Row className="justify-content-md-center align-items-start mt-2 h-100">
          <Col xs lg="9">
            <h2 >About Me</h2>
            <p className="fs-5">Passionate Frontend Developer with 5 years of experience developing dynamic web applications with
              JavaScript, React.js and .Net.<br /> Proficient in creating seamless, scalable, and maintainable code
              and improving user experiences.<br /> Collaborating effectively with cross-functional teams to deliver high-quality projects on time
              And adept at optimizing processes, driving cost savings, and mentoring junior developers.</p>
            <h4 className="my-5">My Skills</h4>
            <Row>
              {imagesVite.map((i, j) => (
                <Col>
                  <Image key={j} src={i} fluid />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <Section key={'s' + i} sectionName={`# ${i + 1} Project`}></Section>  */}
      <Container fluid className={classes.full} id='projects'>
        <Row className="justify-content-md-center align-items-start mt-2">
          <Col xs lg="9">
            <h2>Projects</h2>
            {projects.map((pro, i) => (
              <div key={'s' + i} className="d-flex justify-content-center align-items-center border rounded border-dark my-5 p-5 gap-2">
                <Project key={'proj' + i} projects={pro} />
              </div>
            ))}
          </Col>
        </Row>


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
