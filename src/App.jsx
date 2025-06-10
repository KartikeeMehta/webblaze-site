import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 01462bf10df41438ff137e3a4fb0c797dc736f5a
export default App;
