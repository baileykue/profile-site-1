import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
