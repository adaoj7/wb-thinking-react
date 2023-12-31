import React from 'react'

function Hours({isEditing,value,onValueChange}) {
    return isEditing ? (
        <td>
        <input type="text" value={value} onChange={(e) => onValueChange(e.target.value)}/>
    </td>
) : (
    <td>
        {value}
    </td>
)
}

export default Hours
