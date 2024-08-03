import './App.css';
import Sidebar from './Components/Sidebar';
import History from './Components/History';
// import Members from './Components/Members';
// import Ticket from './Components/Ticket';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
          <History/>
          {/* <Members/> */}
          {/* <Ticket/> */}
      </div>
    </div>
  );
}

export default App;
