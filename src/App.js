import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import HomePage from "scenes/homepage";
import LoginPage from "scenes/loginpage";

function App() {
  const mode = useS

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
