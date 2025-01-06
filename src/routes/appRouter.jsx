import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import App from "../App";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
