import React from 'react'
import formatCurrency from '../utils/formatCurrency'

function Rate({isEditing,value}) {
    return isEditing ? (
        <td>
        <input type="text" value={value}/>
    </td>
) : (
    <td>
        {formatCurrency(value)}
    </td>
)
}

export default Rate
