import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import BookAppointment from "./pages/BookAppointment.jsx";
import ViewDoctors from "./pages/ViewDoctors.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-main py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/doctors" element={<ViewDoctors />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
