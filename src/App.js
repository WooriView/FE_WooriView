import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Mainpage from "./pages/MainPage";
import AlbumPage from "./pages/AlbumPage";
import Header from "./components/Header";

const GlobalStyled = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/album" element={<AlbumPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
