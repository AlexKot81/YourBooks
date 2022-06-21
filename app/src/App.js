
import './App.css';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import AuthorsBook from './components/AuthorsBook/AuthorsBook';
import BlokWelcome from './components/BlokWelcome';
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
    </div>
  );
}

export default App;
