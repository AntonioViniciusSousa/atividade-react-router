import { useParams } from "react-router-dom";

const Contato = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Contato {id}</h1>
    </>
  );
};

export default Contato;
