import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/home";
import Contact from "./routes/contact";
import Projects from "./routes/projects";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/projekter" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
