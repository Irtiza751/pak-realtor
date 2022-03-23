import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// Here forgot is the forgot password screen.
import Forgot from "./pages/Forgot";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-slate-800">
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<Forgot />} />
        </Routes>
        {/* Navbar */}
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
