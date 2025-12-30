import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UnderstandingRevolution from "./pages/Blog_UnderstandingRevolution";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/blog/understanding-revolution"
          element={<UnderstandingRevolution />}
        />
      </Routes>
    </BrowserRouter>
  );
}
