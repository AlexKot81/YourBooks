import React, {useState, useEffect} from 'react';
import './App.css';
import { getAuthors, getBooks, getArticles, getCompany, getScills } from "./requests";
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

  const [state, setState] = useState([])
  const [stbooks, setBooks] = useState([])
  const [startikles, setArticles] = useState([])
  const [stcompany, setCompany] = useState([])
  const [stscills, setScills] = useState([])


  useEffect(()=> {
    getAuthors(setState)
    getBooks(setBooks)
    getArticles(setArticles)
    getCompany(setCompany)
    getScills(setScills)
  }, [])


  //console.log(state, stbooks, startikles, stcompany, stscills)

  return (
    <div className="App">
      <MainMenu />
      <BlokWelcome/>
      <AuthorsBook books={stbooks}/>
      <AboutAuthor/>
      <Trusted company={stcompany}/>
      <GetBook />
      <LearnBlok scills={stscills}/>
      <Articles articles={startikles} />
      <Footer />
    </div>
  );
}

export default App;
