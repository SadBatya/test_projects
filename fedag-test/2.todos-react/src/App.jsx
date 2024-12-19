import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (res.status === 200) {
          setArray(res.data);
        } else {
          throw new Error("Ошибка загрузки данных todo");
        }
      })
      .catch((err) => console.error("Ошибка", err));
  }, []);

  return (
    <>
      <h2>Список Туду</h2>
      {array.map((todo, index) => (
        <li key={index}>{todo.title}</li>
      ))}
    </>
  );
}

export default App;
