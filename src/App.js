import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Mainpage from "./pages/MainPage";
import Header from "./components/Header";

function App() {
  // 해당 내용 깃 푸쉬 확인
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
