import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) document.body.classList.add('dark-mode');
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <div className="App">
      <header className="sticky">
        <div className="header-content">
          <h1>Chakinam Chandrakanth</h1>
          <p>Hi there! I’m a Frontend/Full Stack Developer</p>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
          <nav>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('about'); }}>About</a>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('skills'); }}>Skills</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('projects'); }}>Projects</a>
            <a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('education'); }}>Education</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('contact'); }}>Contact</a>
          </nav>
        </div>
      </header>

      <main id="content">
        {activeSection === 'about' && (
          <section className="content-section">
            <h2>About Me</h2>
            <p>I’m a passionate Frontend/Full Stack Developer with expertise in building responsive web applications using HTML, CSS, JavaScript, React, and Node.js. I thrive on solving problems and delivering scalable solutions for real-world challenges.</p>
          </section>
        )}

        {activeSection === 'skills' && (
          <section className="content-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">HTML</div>
              <div className="skill-card">CSS</div>
              <div className="skill-card">JavaScript</div>
              <div className="skill-card">Python</div>
              <div className="skill-card">SQL</div>
              <div className="skill-card">Node.js</div>
              <div className="skill-card">Express.js</div>
              <div className="skill-card">IoT</div>
              <div className="skill-card">AI-ML</div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && <ProjectsSection />}

        {activeSection === 'education' && (
          <section className="content-section">
            <h2>Education</h2>
            <p><strong>B.Tech in ECE</strong> - CMR Technical Campus, Hyderabad (2018–2022, GPA: 6.49)</p>
            <p><strong>MPC</strong> - SR Junior College, Karimnagar (2016–2018, 86.20%)</p>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="content-section">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:chanduchakinam3@gmail.com">chanduchakinam3@gmail.com</a></p>
            <p>Phone: +91-9515006354</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/chakinam-chandrakanth" target="_blank" rel="noreferrer">Chakinam Chandrakanth</a></p>
          </section>
        )}
      </main>

      <footer>
        <p>© Chakinam Chandrakanth.</p>
      </footer>
    </div>
  );
}

function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const projects = [
    { category: 'web', title: 'Todos Application', desc: 'A dynamic to-do list web app with a clean, user-friendly interface.', tech: 'HTML, CSS, JavaScript', link: 'https://ttooddooss.ccbp.tech/' },
    { category: 'web', title: 'Food Delivery Application', desc: 'A responsive food delivery app interface for seamless user experience.', tech: 'HTML, CSS, JavaScript', link: 'https://foodmunch810000.ccbp.tech/' },
    { category: 'iot', title: 'Panic Alert System', desc: 'An IoT-based solution to assist people in emergencies using wireless devices.', tech: 'IoT, Python' },
    { category: 'ai-ml', title: 'Volcanic Eruption Prediction', desc: 'An AI-ML model to predict volcanic eruption end dates using a decisiveness index.', tech: 'Python, AI-ML' },
    { category: 'web', title: 'Rock Paper Scissors Game', desc: 'React allows users to play against a computer, choosing between rock, paper, or scissors, and tracks scores, displaying the outcome (win, lose, or draw) after each round.', tech: 'React, JavaScript, CSS', link: 'https://rpsck.ccbp.tech' },
    { category: 'web', title: 'Prime Video', desc: 'A sample demo of Prime OTT.', tech: 'HTML, CSS, JavaScript', link: 'https://ckprime.ccbp.tech' },
    { category: 'web', title: 'Emoji Game', desc: 'A basic game designed using React.', tech: 'React, JavaScript, CSS', link: 'https://chanduchakinam.ccbp.tech' },
    { category: 'web', title: 'Calculator', desc: 'A basic calculator designed using React.', tech: 'React, JavaScript, CSS', link: 'https://cscalculator.netlify.app' },
  ];

  return (
    <section className="content-section">
      <h2>Projects</h2>
      <div id="project-filters">
        <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'web' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('web')}>Web</button>
        <button className={filter === 'iot' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('iot')}>IoT</button>
        <button className={filter === 'ai-ml' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('ai-ml')}>AI-ML</button>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          (filter === 'all' || project.category === filter) && (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <p><strong>Technologies:</strong> {project.tech}</p>
              {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="btn">Live Demo</a>}
            </div>
          )
        ))}
      </div>
    </section>
  );
}

export default App;