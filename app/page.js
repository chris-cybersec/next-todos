import { Suspense } from "react";

import styles from "@/app/styles/min/Home.module.css";
import FormInput from "./components/formInput";
import ListItems from "./components/listItems";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Suspense fallback={"Loading ..."}>
          <FormInput />
        </Suspense>
      </div>
      <div className={styles.content}>
        <Suspense fallback={"Loading ..."}>
          <ListItems />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;

