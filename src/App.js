import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Pages/registration/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App;
