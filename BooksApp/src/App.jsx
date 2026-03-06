import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import BookRegisterPage from "./pages/register/BookRegisterPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/register" element={<BookRegisterPage />} />
    </Routes>
  );
}

export default App;
