
import './App.css';
import classes from './main.module.css';
import annaLogo from './images/logo-a-trans.svg';
import upArrow from './images/arrow-up.svg';
import githubImg from "./images/github.svg";
import linkedinImg from "./images/linkedin.svg";
import Section from './components/Section';
import Project from './components/Project';
import projectsData from '../projects.json';

// npm install @types/node --save-dev
// npm i @types/webpack-env -D

const imagesVite = Object.values(import.meta.glob('./images/skills/*.{png,jpg,jpeg,PNG,JPEG,svg}', { eager: true, query: '?url', import: 'default' }));

let projects = projectsData;

function App() {

  //const [isScroll, setIsScroll] = useState(false);
  return (
    <div>
      {/* <div role='banner' id='top' className={classes.row}> */}
      <div role='banner' id='top'>
        {/* <img src={annaLogo} className={classes.logo} alt="Anna logo" /> */}
        <img src={annaLogo} alt="Anna logo" className={classes.imgTemp} />
        <nav>
          {/* <ul className={classes['nav__items']}> */}
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </div>
      {/* <div role='main' onScroll={() => setIsScroll(true)} style={{ overflowY: 'scroll', height: '450px' }}> */}
      <div role='main'>
        {/* <div className={classes.row}> */}
        <div>
          <div>
            <h1>Anna Kreimer Ayash</h1>
            <h2>I build things for the web.</h2>
            <p>I'm a software engineer specializing in building exceptional digital experiences.</p>
            {/* <div className={classes['work__links']}> */}
            <div>
              {/* <a target="_blank" className={classes['link__text']}> */}
              <a target="_blank">
                Visit Isracard Site <span>→</span>
              </a>
              <a href="https://github.com/annaKreimerAyash/portfolio" title="View Source Code" target="_blank">
                {/* <img src={githubImg} className={classes['work__code']} alt="GitHub" /> */}
                <img src={githubImg} alt="GitHub" className={classes.imgTemp} />
              </a>
              <a href="https://linkedin.com/in/annakayash" title="Anna's LinkedIn Profile" target="_blank">
                {/* <img src={linkedinImg} className={classes['work__code']} alt="LinkedIn" /> */}
                <img src={linkedinImg} alt="LinkedIn" className={classes.imgTemp} />
              </a>
            </div>
          </div>
        </div>
        <section id='about'>
          <Section sectionName={'About'}>
            <p>Passionate Frontend Developer with 4+ years of experience designing and developing dynamic, user-centric web applications.
              Proficient in React.js, JavaScript, HTML5, CSS3, and responsive design. Known for creating seamless, scalable, and maintainable code,
              improving user experiences, and collaborating effectively with cross-functional teams to deliver high-quality projects on time.
              Adept at optimizing processes, driving cost savings, and mentoring junior developers.</p>
            <h4>My Skills</h4>
            <div>
              {imagesVite.map((i) => (
                <img src={i as string} className={classes.imgTemp} />
              ))}
            </div>
          </Section>
        </section>
        <section id='projects'>
          <ul>
            <div>
              {projects.map((pro, i) => (
                <Section key={'s' + i} sectionName={`# ${i + 1} Project`}>
                  <Project key={'p' + i} projects={pro} />
                </Section>
              ))}
            </div>
          </ul>
        </section>
      </div>
      {/* <a href='#top' className={isScroll? classes['back-to-top'] : classes.hidden} onClick={!isScroll}> */}
      {/* {isScroll && <a href='#top' className={classes['back-to-top']}>
        <img src={upArrow} alt="back-to-top" />
      </a>} */}
      {/* <a href='#top' className={classes['back-to-top']}> */}
      <a href='#top' className={classes.arrowTop}>
        <img src={upArrow} alt="back-to-top" />
      </a>
    </div>
  )
}

export default App
