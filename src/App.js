import { Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";

import HomePage from "./pages/Home/";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
