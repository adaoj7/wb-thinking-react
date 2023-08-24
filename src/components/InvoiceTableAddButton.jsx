import React from 'react'

function InvoiceAddButton({addClick}) {
    return (
    <tr>
      <td></td>
      <td colSpan="4">
        <button onClick={addClick}>Add</button>
      </td>
    </tr>
    )
}

export default InvoiceAddButton
