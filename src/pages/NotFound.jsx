import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <h3>Página não encontrada</h3>
      <Link id="botao-notfound" to={"/"}>Voltar</Link>
      <Footer />
    </>
  );
};

export default NotFound;
