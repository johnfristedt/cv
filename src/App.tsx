import './App.css';

import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/home.component';
import { strings } from './data-files/strings';

export const LangContext = createContext(strings.en);

function App() {
  const [lang, setLang] = useState(strings.en);

  return (
    <div className="App">
      <button type='button' onClick={() => setLang(strings.en)}>English</button>
      <button type='button' onClick={() => setLang(strings.sv)}>Svenska</button>
      <LangContext.Provider value={lang}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </LangContext.Provider>
    </div>
  );
}

export default App;
