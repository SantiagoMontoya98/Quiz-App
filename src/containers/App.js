import Question from '../components/Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import { questionGames, questionGeek, questionHarryPotter } from '../Cuestionario';

function App() {
  return (
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geek" element={<Question cuestionario={ questionGeek } />} />
        <Route path="/games" element={<Question cuestionario={ questionGames } />} />
        <Route path="/harry" element={<Question cuestionario={questionHarryPotter} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
