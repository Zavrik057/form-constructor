
import { createContext, useState } from 'react';
import Constructor from '../modules/constructor/constructor';
import ConstructorPage from '../pages/constructor_page/constructor_page';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RepositoriesPage from '../pages/repositories_page';
import CurrentRepositoriePage from '../pages/current_repositorie_page.jsx/currentRepositoriePage';

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
      <RepositoriesState.Provider value={{ repositories, setRepositories, addRepositorie }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ConstructorPage />} />
            <Route path='/repositories' element={<RepositoriesPage />} />
            <Route path='/repositorie/:id' element={<CurrentRepositoriePage />} />
          </Routes>
        </BrowserRouter>
      </RepositoriesState.Provider>
    </>
  );
}

export default App;
