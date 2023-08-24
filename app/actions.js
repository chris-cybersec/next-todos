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

//***********************************deleteOne
const deleteOne = async(id) => {
  const endpoint = `http://127.0.0.1:2032/api/delete-one`;
  const config = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(id),
  };

  const res = await fetch(endpoint, config)
  return res.json()
}

//***********************************deleteOne
const deleteAll = async() => {
  const endpoint = `http://127.0.0.1:2032/api/delete-all`;
  const config = {
    method: "DELETE",
  }
  
  const res = await fetch(endpoint, config)
  return res.json()
}
export { addTodo, deleteOne, deleteAll };
