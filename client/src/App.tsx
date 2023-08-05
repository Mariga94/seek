import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Talents, Projects, Talent, Project, Register, Login } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Talents />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/services/:id" element={<Talent />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
