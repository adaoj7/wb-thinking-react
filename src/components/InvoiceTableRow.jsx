import React from "react";
import EditableRowModeButtons from "./ModeButtons";
import EditableDescriptionCell from "./Description";
import EditableHoursCell from "./Hours";
import EditableRateCell from "./Rate";
import formatCurrency from "../utils/formatCurrency";
import { useState } from "react";
import axios from "axios";

function InvoiceTableRow({ initialIsEditing, initialInvoiceData,deleteFunc,id }) {
    const [editMode, setIsEditing] = useState(initialIsEditing);
    const [description, setDescription] = useState(
        initialInvoiceData.description
    );
    const [rate, setRate] = useState(initialInvoiceData.rate);
    const [hours, setHours] = useState(initialInvoiceData.hours);

    const changeEditMode = () => setIsEditing(true);
    const changeNormalMode = async () => {

        let bodyObj = {
            description,
            rate,
            hours
        }
        
        const {data} = await axios.put(`/editInvoice/${id}`,bodyObj)
        if(!data.error){
            setIsEditing(false);
            
        } else {
            alert('something broke')
        }
    }

    return (
        <tr>
            <EditableRowModeButtons
                isEditing={editMode}
                editClick={changeEditMode}
                saveClick={changeNormalMode}
                onDeleteClick={deleteFunc}
            />
            <EditableDescriptionCell
                value={description}
                isEditing={editMode}
                onValueChange={setDescription}
            />
            <EditableRateCell
                value={rate}
                isEditing={editMode}
                onValueChange={setRate}
            />
            <EditableHoursCell
                value={hours}
                isEditing={editMode}
                onValueChange={setHours}
            />
            <td>{formatCurrency(rate * hours)}</td>
        </tr>
    );
}

export default InvoiceTableRow;
