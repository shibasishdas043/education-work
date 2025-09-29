import { useParams } from "react-router-dom";

const Storage = () => {
  const {data}  = useParams();

  return (
    <div>
      <h1>Data : {data}</h1>
    </div>
  );
};

export default Storage;
