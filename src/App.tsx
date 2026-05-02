import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blocknauts from './components/Blocknauts';
import Course from './components/Course';
import Leaderboard from './components/Leaderboard';
import Resources from './components/Resources';
import AcademyHub from './components/AcademyHub';
import Profile from './components/Profile';
import Settings from './components/Settings';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blocknauts" element={<Blocknauts />} />
          <Route path="/learn" element={<AcademyHub />} />
          <Route path="/learn/course" element={<Course />} />
          <Route path="/learn/leaderboard" element={<Leaderboard />} />
          <Route path="/learn/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
