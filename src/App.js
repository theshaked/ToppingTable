import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scrollable from "./components/Scrollable/Scrollable";
import PizzaSuggestion from "./components/PizzaSuggestion/PizzaSuggestion";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/PizzaSuggestion" element={<PizzaSuggestion />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
