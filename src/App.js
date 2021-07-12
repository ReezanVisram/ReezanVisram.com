import './App.css';

import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <header style={{height: "7.5vh"}}>
        <Header />
      </header>
      <section id='landing'>
        <Landing />
      </section>

      <section id='education'>
        <Education />
      </section>

      <section id='experience'>
        <Experience />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
