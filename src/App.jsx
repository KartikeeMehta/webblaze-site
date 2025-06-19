import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About_us from "./pages/About_us";
import Uiux_app from "./pages/Uiux_app";
import Word_Press from "./pages/Word_Press";
import Web_Design from "./pages/Web_Design";
<<<<<<< HEAD
=======
import Shopify from "./pages/Shopify";
import Shopify_app from "./pages/Shopify_app";
import Php_laravel from "./pages/Php_laravel";
import Javascript from "./pages/Javascript";
import ReactJs from "./pages/ReactJs";
>>>>>>> 657d730c74de276bb09ebf120ea8f6e83c896802

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_us" element={<About_us />} />
        <Route path="/Uiux_app" element={<Uiux_app />} />
        <Route path="/Word_Press" element={<Word_Press />} />
        <Route path="/Web_Design" element={<Web_Design />} />
<<<<<<< HEAD


=======
        <Route path="/Shopify" element={<Shopify />} />
        <Route path="/Shopify_app" element={<Shopify_app />} />
        <Route path="/Php_laravel" element={<Php_laravel />} />
        <Route path="/Javascript" element={<Javascript />} />
        <Route path="/ReactJs" element={<ReactJs />} />
>>>>>>> 657d730c74de276bb09ebf120ea8f6e83c896802
      </Routes>
    </Router>
  );
}
export default App;
