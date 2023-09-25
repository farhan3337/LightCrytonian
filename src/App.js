import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from "./pages/Support/Support";
import Transaction from "./pages/Transaction/Transaction";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
