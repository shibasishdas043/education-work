// import { useContext } from "react";
// import { contextApi } from "../context/context";
import useStore  from "../store/store";

const Storage = () => {
  // const { arr } = useContext(contextApi);

  const { pageData } = useStore();
  console.log(pageData);

  return (
    <div>
      <h1>Data : {pageData} </h1>
    </div>
  );
};

export default Storage;
