import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost'
import Header from './components/Header';
const App = () => (
  <Router>
    <Toaster />
    <Header/>
    <main className="sm:p-8 px-4 py-8 w-full bg-[rgba(226,210,249,0.7)] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </Router>
);

export default App;