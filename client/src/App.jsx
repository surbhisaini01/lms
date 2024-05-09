import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/homepage" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
