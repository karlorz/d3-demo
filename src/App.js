import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Demo from './pages/Demo';
import Play from './pages/Play';
import Chart from './pages/Chart';
import Download from './pages/Download';
import { routePath } from './routes/route';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.demo} element={<Demo />} />
        <Route path={routePath.play} element={<Play />} />
        <Route path={routePath.chart} element={<Chart />} />
        <Route path={routePath.download} element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App;
