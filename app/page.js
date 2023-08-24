import { Suspense } from "react";

import styles from "@/app/styles/min/Home.module.css";
import FormInput from "./components/formInput";
import ListItems from "./components/listItems";
import DeleteSomeData from "./deletesomedata/page";

const getTodos = async () => {
  const res = await fetch("http://127.0.0.1:2032/api/get-todos", {
    cache: "no-store",
  });
  return res.json();
}


const Home = async() => {
   const todos = await getTodos()
console.log(todos.length)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Suspense fallback={"Loading ..."}>
          <FormInput />
        </Suspense>
      </div>
      <div className={styles.content}>
        <Suspense fallback={"Loading ..."}>
    { todos.length < 5 ? <ListItems /> : <DeleteSomeData /> }
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
