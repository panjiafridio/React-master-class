import  React  from "react";
import  Button  from "./Button";
import "../style/List.css";

const List = () => {
    return (
        <div className="container-list">
            <h3>List Item</h3>
            <div className="container-button">
                <Button />
            </div>
        </div>
    )
}

export default List;