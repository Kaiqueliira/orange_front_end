import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Trail from "../Pages/Trail";

export default function RoutesOrange() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trail" element={<Trail />} />
      </Routes>
    </BrowserRouter>
  );
}
