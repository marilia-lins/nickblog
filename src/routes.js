import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Paginas/Menu";
import PaginaPadrao from "Paginas/PaginaPadrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/NaoEncontrada";
import Footer from "Paginas/Footer";
import ScrollToTop from "Paginas/ScrollTop";

function AppRoutes() {

  return (
    <BrowserRouter>
     <ScrollToTop />
      <Menu />
        <Routes>
            <Route path="/" element={<PaginaPadrao />}>
                <Route index element={<Inicio/>} />
                <Route path="sobremim" element={<SobreMim/>} />
            </Route>
            <Route path="posts/:id" element={<Post />} />
            <Route path="*" element={<NaoEncontrada />}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
