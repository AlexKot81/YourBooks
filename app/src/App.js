
import './App.css';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import Articles from './components/Articles/Articles';
import AuthorsBook from './components/AuthorsBook/AuthorsBook';
import BlokWelcome from './components/BlokWelcome';
import Footer from './components/Footer/Footer';
import GetBook from './components/GetBook/GetBook';
import LearnBlok from './components/LearnBlok/LearnBlok';
import MainMenu from './components/MainMenu';
import Trusted from './components/Trusted/Trusted';

function App() {
  return (
    <div className="App">
      <MainMenu/>
      <BlokWelcome/>
      <AuthorsBook/>
      <AboutAuthor/>
      <Trusted />
      <GetBook />
      <LearnBlok />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
