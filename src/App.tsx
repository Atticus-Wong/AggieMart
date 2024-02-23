import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import MakePost from './pages/MakePost'
import ViewPost from './pages/ViewPost'
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

import './styles/navbar.css'
import './styles/App.css'
import './styles/item.css'
import './styles/left_menu.css'
import './styles/CreateDescription.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/MakePost" element={<MakePost />} />
          <Route path="/ViewPost" element={<ViewPost />} />
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
