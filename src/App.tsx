import './App.css';

import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/home.component';
import { strings } from './data-files/strings';
import { LanguageSelect } from './components/language-select.component';

export const LangContext = createContext(strings.en);

function App() {
  const [lang, setLang] = useState(strings.en);

  return (
    <div className="App">
      <LanguageSelect onSetLanguage={(key) => setLang(strings[key])} />
      
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
