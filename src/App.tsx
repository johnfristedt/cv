import './App.css';

import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Background } from './components/background/background.component';
import { Controls } from './components/controls/controls.component';
import { Home } from './components/home/home.component';
import { strings } from './data-files/strings';

export const LangContext = createContext(strings.en);

function App() {
  const [lang, setLang] = useState(strings.en);

  return (
    <div className="App">
      <Background />
      <LangContext.Provider value={lang}>
        <Controls onSetLanguage={(key) => setLang(strings[key])} />

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
