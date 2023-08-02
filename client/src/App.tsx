import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Talent } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Talent />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
