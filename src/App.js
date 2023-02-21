import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter basename="/YoungZRecords">
      <Routes>
        <Route exact path="/YoungZRecords" element={<Landing />} />
        <Route exact path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
