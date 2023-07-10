import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

import Home from './components/home';
import Createform from "./components/createform";
import ProblemsList from "./components/problemslist";
 
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/addproblem" element={<Createform />} />
            <Route path="/problems/:id" element={<ProblemsList />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
          />
      </ThemeProvider>
    </div>
  );
}


const THEME = createTheme({
  typography: {
    fontFamily: "Roboto Mono, monospace",
  },
  // palette: {
  //   primary: {
  //     // main: '#791314'
  //   },
  // },
});

export default App;
