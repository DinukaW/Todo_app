import axios from "axios";
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";

export default function TodoList({todos = [], setTodos}){   

    const handleDelete = (id) => {
        axios.delete(`/api/todos/${id}/`)
            .then(() => {
                const newTodos = todos.filter(t => {
                    return t.id !== id
                });
                setTodos(newTodos);
            }).catch(() => {
                alert("Something went wrong");
            })
    }

    const handleUpdate = async (id, value) => {
        return axios.patch(`/api/todos/${id}/`, value)
            .then((res) => {
                const { data } = res;
                const newTodos = todos.map(t => {
                    if (t.id === id) {
                        return data;
                    }
                    return t;
                })
                setTodos(newTodos);
            }).catch(() => {
                alert("Something went wrong");
            })
    }
    
    const renderListGroupItem = (t) => {
        return <ListGroup.Item key={t.id} className="d-flex justify-content-between align-items-center">  
                <div className="d-flex justify-content-center">
                    <span style={{
                        marginRight: "12px", cursor: "pointer"
                    }} onClick={() =>
                        handleUpdate(t.id, {
                            completed: !t.completed
                        })
                    }> 
                        {t.completed === true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    </span>
                    <span>
                    {t.name}
                    </span>
                </div>
                <div>
                    <MdDelete style={{
                        cursor: "pointer"
                    }} onClick={() => {
                        handleDelete(t.id)
                    }}/>
                </div>
            </ListGroup.Item>
    }


    return <ListGroup>
        {todos.map(renderListGroupItem)}
  </ListGroup>

}