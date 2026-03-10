import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Drivers from './pages/Drivers';
import DriverDetail from './pages/DriverDetail';
import Teams from './pages/Teams';
import TeamDetail from './pages/TeamDetail';
import Seasons from './pages/Seasons';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/:id" element={<DriverDetail />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:id" element={<TeamDetail />} />
            <Route path="/seasons" element={<Seasons />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
