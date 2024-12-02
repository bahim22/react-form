import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
//import MenuBar from './components/Menu';
import FormPro from './Form';
import Copyright from './components/CopyrightFoot';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Skills2  from './components/Skills';
// import Software2  from './components/Software';
// import { Software } from './components/Software';
// import ProjMain from './components/ProjMain.js';
// import SkillList from './SkillList';
// import CardMain from './components/CardMain';
import AppAppBar from './components/Menu24';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppAppBar mode='dark' />
            <About />
            <Projects />
            <Contact />
            <FormPro />
            <Copyright />
        </ThemeProvider>
    );
}

export default App;
