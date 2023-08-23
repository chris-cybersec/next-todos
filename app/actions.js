//***********************************addTodo
const addTodo = async (todo) => {
  // console.log("addTodo");
  const endpoint = `http://127.0.0.1:2032/api/add-todo`;
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  };

  const res = await fetch(endpoint, config);
  return res.json();
};

export { addTodo };
