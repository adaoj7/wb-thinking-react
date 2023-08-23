import React from 'react'
import EditableRowModeButtons from './ModeButtons';
import EditableDescriptionCell from './Description';
import EditableHoursCell from './Hours';
import EditableRateCell from './Rate';
import formatCurrency from '../utils/formatCurrency';

function InvoiceTableRow({initialIsEditing,initialInvoiceData}) {
    const {description,rate,hours} = initialInvoiceData
    return (
    <tr>
      <EditableRowModeButtons isEditing={initialIsEditing} />
      <EditableDescriptionCell value={description} isEditing={initialIsEditing} />
      <EditableRateCell value={rate} isEditing={initialIsEditing} />
      <EditableHoursCell value={hours} isEditing={initialIsEditing} />
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
    )
}

export default InvoiceTableRow
