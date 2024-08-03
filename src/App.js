import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import History from './Components/History';
import Login from './Components/login';
import Members from './Components/Members';
import Ticket from './Components/Ticket';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
      <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/ticket' element={<Ticket />} />
            <Route path='/members' element={<Members />} />
            <Route path='/history' element={<History />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
