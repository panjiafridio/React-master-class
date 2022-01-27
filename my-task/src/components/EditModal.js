import React from "react";
import Button from "./Button";
import "../style/EditModal.css";


class EditModal extends React.Component{
    render(){
        return(
            <div className="modal-container">
                <div className="modal-box">
                    <h1>Edit Modal</h1>
                    <div className="input">
                        <input type="text"/>
                    </div>
                    <div className="btn-container">
                        <Button text="Add" variant="success"/>
                        <Button text="Cancel" variant="warning"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal;