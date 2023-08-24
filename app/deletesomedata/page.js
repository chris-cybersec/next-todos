import styles from "@/app/styles/min/DeleteSomeData.module.css";
import { Suspense } from "react";
import DeleteAll from "../components/deleteall";

const getTodos = async () => {
  const endpoint = "http://127.0.0.1:2032/api/get-todos";
  const config = { cache: "no-store" };
  const res = await fetch(endpoint, config);

  return res.json();
};

const DeleteSomeData = () => {
  return (
    <div className={styles.container}>
      <p>Please delete some Datas!!!</p>
      <div className={styles.deleteAll}>
        <Suspense fallback={"Loading ..."}>
          <DeleteAll />
        </Suspense>
      </div>
    </div>
  );
};

export default DeleteSomeData;
