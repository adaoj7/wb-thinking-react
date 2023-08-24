import React from 'react'

function ModeButtons({isEditing,editClick,saveClick,onDeleteClick}) {
    return isEditing ? (
        <td>
            <button onClick={saveClick}>Save</button>
        </td>
    ) : (
        <td>
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={editClick}>Edit</button>
        </td>
    )
}

export default ModeButtons
