import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
