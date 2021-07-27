import './App.css';
import React from "react"
import {FaTrash} from 'react-icons/fa';
import ListItem from "./components/list_item";

/**
 *
 * @type {({checked: boolean, id: number, title: string, content: string})[]}
 * @property checked : mapped to a checkbox, defines if an item is checked or not
 * @property title : mapped to a text, renders the title of item
 * @property content mapped to a text, renders the content of item ,
 * @property id , is used as key and is unique id of the item, is used also to find item and make specific updates on it like toggling and checking
 */
const data = [
    {id: 0, title: "Title 1", content: "Content 1 is here this is a simple example", checked: false},
    {id: 1, title: "Title 1", content: "Content 1 is here this is a simple example", checked: true},
    {id: 2, title: "Title 1", content: "Content 1 is here this is a simple example", checked: true},
    {id: 3, title: "Title 1", content: "Content 1 is here this is a simple example", checked: true},
    {id: 4, title: "Title 1", content: "Content 1 is here this is a simple example", checked: true}
];

function App() {

    const [items, setItems] = React.useState(data);
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");


    const handle_add_item = () => {
        // your code here
        const newId = Math.random();// calculate id  instead of 0
        const newItem = {id:newId,title:title,content:content, checked:false};
        setTitle("");
        setContent("");
        // do the sime also for the content hook as is done for the title one
        //setItems(/** you can use a function to update the state */);
        setItems(old=>[newItem,...old]); 
    }


    const delete_item = (id) => {

        setItems(old=> old.filter(item=>item.id!=id));
    }


    const toggle_item = (id) => {
        setItems(old => {old.forEach(item=>{if(item.id == id)item.checked = item.checked;})
            // update the checked property of the item with id equal to the argument of toggle_item function
            // use foreach function of the list to iterate to the list items
            // update toggle property of the item with id toggle_item function takes as argument

            return old;
        });
    }

    // todo 6 complete the delete all function
    const delete_all = (e) => {
        setItems([]);
    };

    return (
        <div className="App">
            <section className="App-Header">
                <h3> App</h3>
                <div className="App-Header-Action">
                    <button onClick={ delete_all }
                        className="btn"
                        style={{"background-color": "red"}}>
                        Clear All
                    </button>
                </div>
            </section>
            <section className="form">
                <div className="form-group">
                    <div className="form-inline">
                        <label className="form-inline-label">Title</label>
                        {/** check example below for todo 1 */}
                        <input onChange={e => setTitle(e.target.value)}
                            value={title}
                            className="form-inline-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-inline">
                        <label className="form-inline-label">Content</label>
                        {/*  //Todo 1 bind the StateHook to text area, similar as upper input */}
                        <textarea onChange={e=>setContent(e.target.value)  } 
                            value={ content }
                            rows="3"
                            className="form-inline-control">
                    </textarea>
                    </div>
                </div>
                <div className="form-inline">
                    <div className="form-inline-label"></div>
                    <button onClick = {()=>handle_add_item()}
                        className="btn form-inline-control"> Add
                    </button>
                </div>
            </section>
            <main className="list">
                {items.length==0?
                (
                    <h2 className = "list-zero">No items</h2>

                ):(
                    <ListItem items ={items} toggle_item = {toggle_item} delete_item = {delete_item}></ListItem>
                )}
                </main>
        </div>
    );
}

export default App;