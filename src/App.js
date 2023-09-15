import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState, useSyncExternalStore } from 'react';
import Alert from './components/Alert';
import Pricing from './pages/Pricing';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2f343b'
      showAlert('Dark Mode Enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path='/' element={<TextForm heading="Enter the text here" mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route exact path='/pricing' element={<Pricing />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
