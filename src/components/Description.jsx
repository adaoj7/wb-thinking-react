import React from 'react'

function Description({isEditing,value}) {
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

export default Description
