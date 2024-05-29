import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import AllPosts from './pages/AllPosts';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/createpost" element={<CreatePost />}/>
          <Route path="/allposts" element={<AllPosts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
