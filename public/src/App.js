import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

import Home from './components/home';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import AddingForm from "./components/form";
import TablePage from "./components/tablepage";

function App() {
  const [isAuth, setIsAuth] = useState(
    window.localStorage.getItem("isAuth") || false
  );
  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/login' element={<Login />}/>
            <Route path="/register" element={<Register />} /> */}
            <Route path="/addproblem" element={<AddingForm />} />
            <Route path="/topictable" element={<TablePage />} />
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
