import '../index.css';
import {FaTrash} from "react-icons/fa";
import React from "react";

/**
 *
 * @param id of list item used as key for component
 * @param checked property used to render checkbox as checked or not checked
 * @param title property of the item used to render title of item
 * @param content property of list item
 * @param onCheckedChange callback used to toggle checked state of the item
 * @param onDelete callback used to remove item from the list
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListItem(props) {
    const {items, toggle_item,delete_item} = props;
    return<> {
                    items.map(
                        item => (
                            <div key={item.id} className="list-item">
                                <div className="list-item-check">
                                    <label>
                                        <input onChange={()=>toggle_item(item.id)}
                                            defaultChecked={item.checked ? "checked" : ""}
                                            type="checkbox"/>
                                    </label>
                                </div>
                                <div className="list-item-content">
                                    <label className="content-title">{item.title}</label>
                                    <label className="content-body">{item.content}</label>
                                </div>
                                <div className="list-item-action">
                                    <button className="image-button" onClick = {()=>delete_item(item.id)}
                                        /** Todo 3 bind the delete_item function to the delete button of the specific item
                                        you can follow same approach as the toggle_item function
                                        if you do it right a window will be shown on the screen */
                                        /* onClick={ your listener here }*/>
                                        <FaTrash/>
                                    </button>
                                </div>
                            </div>)
            )
    }</>
}
