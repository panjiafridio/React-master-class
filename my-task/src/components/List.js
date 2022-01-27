import  React  from "react";
import PropsTypes from "prop-types";
import  Button  from "./Button";
import "../style/List.css";

const List = ({ todo, del }) => {
    const delById = id =>{
        del(id)
    }
    return (
        <div className="container-list">
            <h3 className="list-h3">{todo.title}</h3>
            <div className="container-button">
                <Button text="Edit" variant="success" />
                <Button text="Delete" variant="warning" action={() => delById(todo.id)}/>
            </div>
        </div>
    )
}

List.propTypes = {
    todo : PropsTypes.object.isRequired,
    del : PropsTypes.func.isRequired,
}

export default List;