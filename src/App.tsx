import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blocknauts from './components/Blocknauts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blocknauts" element={<Blocknauts />} />
      </Routes>
    </BrowserRouter>
  );
}
