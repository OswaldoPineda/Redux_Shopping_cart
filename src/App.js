import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Cart from './components/cart';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
