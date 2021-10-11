import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "../src/types/item";
import {ListItem} from './components/ListItem'
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Study React",
      done: true,
    },
    { id: 2, name: "5 days five projects React", done: false },
  ]);

  const handleAddTask = (taskName : string) => {
    let newList = [...list];
     newList.push({
       id:list.length + 1,
       name:taskName,
       done: false,
     })
     setList(newList);
  }
    return (
    <C.Container>
      <C.Area>
        <C.Header>To-Do List </C.Header>
        {/* {Area de adicionar nova tarefa} */}
        <AddArea onEnter ={handleAddTask}/>
    {/* {area de items} */}
      {list.map((item, index) => (
        <ListItem key={index} item ={item}/>
      ))}
   
      </C.Area>
    </C.Container>
  );
};
export default App;
