import React from 'react'

function Rate({isEditing}) {
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

export default Rate
