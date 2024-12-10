import { Link } from "react-router-dom";

const Contatos = () => {
  return ( 
    <>
      <h1>Contatos</h1>
      <ul>
        <li> <Link to={"/contact/1"}>Contato 1</Link> </li>
        <li> <Link to={"/contact/2"}>Contato 2</Link> </li>
        <li> <Link to={"/contact/3"}>Contato 3</Link> </li>
      </ul>
    </>
   );
}
 
export default Contatos;