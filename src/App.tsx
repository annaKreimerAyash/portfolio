// import { useState } from 'react'
import './App.css';
import classes from './main.module.css';
import annaLogo from './images/logo-a-grey.svg';
import upArrow from './images/arrow-up.svg';
import githubImg from "./images/github.svg";
import linkedinImg from "./images/linkedin.svg";
import Section from './components/Section';
import Project from './components/Project';

let projects = [{
  "name": "Reduction Print Letters",
  "description": "change distribution process from print to digital channals",
  "technologies": ["HTML", "CSS", "JavaScript", "ReactJs"]
},
{
  "name": "Update PB",
  "description": "bla bla bla",
  "technologies": [".Net", "PoweShell", "IT"]
}];


function App() {

  //const [isScroll, setIsScroll] = useState(false);

  return (
    <div>
      <div role='banner' id='top' className={classes.row}>
        {/* <a href="https://vite.dev" target="_blank"> */}
        <img src={annaLogo} className={classes.logo} alt="Vite logo" />
        <nav>
          <ul className={classes['nav__items']}>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </div>
      {/* <div role='main' onScroll={() => setIsScroll(true)} style={{ overflowY: 'scroll', height: '450px' }}> */}
      <div role='main'>
        <div className={classes.row}>
          <div>
            <h1>Anna Kreimer Ayash</h1>
            <h2>I build things for the web.</h2>
            <p>I'm a software engineer specializing in building exceptional digital experiences.</p>
            <div className={classes['work__links']}>
              <a target="_blank" className={classes['link__text']}>
                Visit Site <span>→</span>
              </a>
              <a href="https://github.com/annaKreimerAyash/portfolio" title="View Source Code" target="_blank">
                <img src={githubImg} className={classes['work__code']} alt="GitHub" />
              </a>
              <a href="https://linkedin.com/in/annakayash" title="Anna's LinkedIn Profile" target="_blank">
                <img src={linkedinImg} className={classes['work__code']} alt="LinkedIn" />
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
            <ul className={classes['work__list']}>
              <li>JavaScript(ES6+)</li>
              <li>React.js</li>
              <li>JQuery</li>
              <li>Vue.js</li>
              <li>.Net</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
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
      <a href='#top' className={classes['back-to-top']}>
        <img src={upArrow} alt="back-to-top" />
      </a>
    </div>
  )
}

export default App
