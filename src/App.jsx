import { Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Characters />} />
        
      <Route path="/characters" element={<Characters />} />
    </Routes>
    </>
  )
}

export default App
