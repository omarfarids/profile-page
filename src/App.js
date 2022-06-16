import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/main.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import bankerimg from './assets/img1.webp';
import developerimg from './assets/img2.png';
import headerimg from './assets/img3.jpg';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Loading from './components/Loading';
import { useContext } from 'react';
import { AppContext } from './components/context';

function App() {
  const {loading} = useContext(AppContext);
  



    if(loading){
      return <Loading />
    }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/profile-page' element={
            <div>
              <Nav/>
              <Header image={headerimg}/>
              <Main image={[bankerimg , developerimg]}/>
            </div>
          }/>
          <Route path='/profile-page/portfolio' element={<Portfolio/>} />
          <Route path='/profile-page/Contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
