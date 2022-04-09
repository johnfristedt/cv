import './App.css';

import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Controls } from './components/controls/controls.component';
import { Home } from './components/home/home.component';
import { Splash } from './components/splash/splash.component';
import { strings } from './data-files/strings';

export const LangContext = createContext(strings.en);

function App() {
  const [lang, setLang] = useState(strings.en);

  return (
    <div className="App">
      <Splash />
      <Controls onSetLanguage={(key) => setLang(strings[key])} />

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
