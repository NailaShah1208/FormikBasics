
import './App.css';
import FormikContainer from './components/FormikContainer';
import Login from './components/Login';
import Registeration from './components/Registeration';
import CourseEnrollment from './components/CourseEnrollment';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {purple} from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <FormikContainer/>
     
    </div>
    </ThemeProvider>
  );
}

export default App;
