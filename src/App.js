import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './pages/Create.jsx/Create';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
