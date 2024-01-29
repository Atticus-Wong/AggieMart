import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import MakePost from './pages/MakePost'
import ViewPost from './pages/ViewPost'
import './styles/navbar.css'
import './styles/App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/MakePost" element={<MakePost />} />
          <Route path="/ViewPost" element={<ViewPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
