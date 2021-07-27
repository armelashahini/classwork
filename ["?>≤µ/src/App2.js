import './App.css';
import React from "react"
import {FaTrash} from 'react-icons/fa';
import ListItem from "./components/list_item";

/**
 * This is example explained during the lesson
 */
const data = [
    {id: 0, note: "Title 1", checked: false},
    {id: 1, note: "Title 1", checked: true},
    {id: 2, note: "Title 1", checked: true},
    {id: 3, note: "Title 1", checked: true},
    {id: 4, note: "Title 1", checked: true}
];

function App() {
    const [items, setItems] = React.useState(data);
    const handle_add_item = () => {
        const id = Math.random();
        const newItem = {id,note:"the new text note",checked:false};
        setItems(old=>[newItem,...old]);
    }

    const delete_item = (id) => {
        setItems(old=>old.filter(item=>item.id!=id));
    }
    const toggle_item = (id) => {
        setItems(old=>{
            old.forEach(item=>{
                if(item.id==id){
                    item.checked=!item.checked;
                }
            });
            return old;
        })
    }

    return (
        <div className="App">
            <button onClick={handle_add_item}>Add</button>
            <main className="list">
                {items.map(
                    item => (
                        <div key={item.id} className="list-item">
                            <input onChange={() => toggle_item(item.id)}
                                   defaultChecked={item.checked ? "checked" : ""}
                                   type="checkbox"/>
                            <label className="list-item-content">
                                {item.note}
                            </label>
                            <button className="image-button"
                                    onClick={(e)=>delete_item(item.id)}>
                                <FaTrash/>
                            </button>
                        </div>
                    )
                )
                }
            </main>
        </div>
    );
}

export default App;
