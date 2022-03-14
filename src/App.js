import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { SnackSystemContextProvider} from './contexts/SnackSystemContext';
import { UserDataManagementContextProvider } from './contexts/UserDataManagementContext';


function App() {
  return (
    <div className="App">
       <SnackSystemContextProvider>
       <UserDataManagementContextProvider>
      <Router>
      <NavBar />  
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
      </UserDataManagementContextProvider>
      </SnackSystemContextProvider>   
    </div>
  );
}

export default App;
