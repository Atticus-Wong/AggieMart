import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import SignIn from './pages/SignIn'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
