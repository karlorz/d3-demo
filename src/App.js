import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Demo from './pages/Demo';
import { routePath } from './routes/route';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.demo} element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
