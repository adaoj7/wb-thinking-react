import React from 'react'

function Hours({isEditing}) {
    return isEditing ? (
        <td>
        <input type="text" value={value}/>
    </td>
) : (
    <td>
        {value}
    </td>
)
}

export default Hours