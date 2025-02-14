
import { createContext, useState } from 'react';
import Constructor from '../modules/constructor/constructor';
import ConstructorPage from '../pages/constructor_page/constructor_page';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrentRepositoriePage from '../pages/current_repositorie_page.jsx/currentRepositoriePage';
import RepositoriesPage from '../pages/repositorie_page/repositories_page';
import AnswerPage from '../pages/answer_page/answer_page';
import ChangeColorTheme from '../features/change_color_theme/change_color_theme';
import Navbar from '../modules/navbar/navbar';
import Sidebar from '../modules/sidebar/sidebar';
import { deepPurple } from '@mui/material/colors';

export const AppState = createContext(null);
function App() {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [colorTheme, setColorTheme] = useState(
    {
      colorName: 'deepPurple',
      mainColor: deepPurple[500],
      secondColor: deepPurple[700],
      bgColor: deepPurple[50]
    });
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
        <AppState.Provider value={{ repositories, setRepositories, addRepositorie, sidebarIsOpen, setSidebarIsOpen, colorTheme, setColorTheme }}>
          <BrowserRouter>
            <Navbar />
            <main className='main'>
              <Sidebar />
              <Routes>
                <Route path='/' element={<ConstructorPage />} />
                <Route path='/repositories' element={<RepositoriesPage />} />
                <Route path='/repositorie/:id' element={<CurrentRepositoriePage />} />
                <Route path='/repositorie/:id/answer/:index' element={<AnswerPage />} />
              </Routes>
            </main>
          </BrowserRouter>
        </AppState.Provider>
      </div>
    </>
  );
}

export default App;
