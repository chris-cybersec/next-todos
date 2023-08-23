import styles from "@/app/styles/min/ListItems.module.css";
import Nested from "./nested";

const getTodos = async () => {
  const res = await fetch("http://127.0.0.1:2032/api/get-todos", {
    cache: "no-store",
  });
  return res.json();
};
const ListItems = async () => {
  const todos = await getTodos();

  const datas = todos?.map((data) => {
    const { _id, todo } = data;
    // console.log(todo);

    return (
      <div className={styles.container} key={_id}>
        <Nested id={_id} />
        <p>{todo}</p>
      </div>
    );
  });
  return datas;
};

export default ListItems;
