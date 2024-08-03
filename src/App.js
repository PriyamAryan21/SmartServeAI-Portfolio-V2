import './App.css';
import Sidebar from './Components/Sidebar';
import History from './Components/History';
import Login from './Components/login'; 
// import Members from './Components/Members';
// import Ticket from './Components/Ticket';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
          {/* <History/> */}
          {/* <Members/> */}
          {/* <Ticket/> */}
          <Login/>
      </div>
    </div>
  );
}

export default App;
