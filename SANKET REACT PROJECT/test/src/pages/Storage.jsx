import { useContext } from "react";
import { contextApi } from "../context/context";

const Storage = () => {
  const { arr } = useContext(contextApi);

  return (
    <div>
      <h1>Data : {arr[0]}</h1>
    </div>
  );
};

export default Storage;
