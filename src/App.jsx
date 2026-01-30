import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Characters from './pages/Characters';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;