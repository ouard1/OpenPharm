import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import DetailTwo from "./Pages/DetailTwo/DetailTwo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detailtwo" element={<DetailTwo />} />
      </Routes>
    </>
  );
}

export default App;
