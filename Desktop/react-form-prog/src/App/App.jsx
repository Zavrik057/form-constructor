
import { createContext, useState } from 'react';
import Constructor from '../modules/constructor/constructor';
import ConstructorPage from '../pages/constructor_page/constructor_page';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrentRepositoriePage from '../pages/current_repositorie_page.jsx/currentRepositoriePage';
import RepositoriesPage from '../pages/repositorie_page/repositories_page';
import AnswerPage from '../pages/answer_page/answer_page';

export const RepositoriesState = createContext(null);
function App() {

  const [repositories, setRepositories] = useState([]);

  function addRepositorie(repositorie) {
    setRepositories([...repositories, {
      form: repositorie,
      answers: [],
    }]);
  }
  return (
    <>
      <div className="wrapper">
        <RepositoriesState.Provider value={{ repositories, setRepositories, addRepositorie }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ConstructorPage />} />
              <Route path='/repositories' element={<RepositoriesPage />} />
              <Route path='/repositorie/:id' element={<CurrentRepositoriePage />} />
              <Route path='/repositorie/:id/answer/:index' element={<AnswerPage />} />
            </Routes>
          </BrowserRouter>
        </RepositoriesState.Provider>
      </div>
    </>
  );
}

export default App;
