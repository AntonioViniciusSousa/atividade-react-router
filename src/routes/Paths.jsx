import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Contatos from "../pages/Contatos";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>

            <Route index element={<PaginaInicial />} />

            <Route path="/about" element={<Sobre />} />

            <Route path="/contacts" element={<Contatos />} />

            <Route path="/contact/:id" element={<Contato />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
