import './InvoiceTable.css';
import React from 'react'
import ModeButtons from './ModeButtons';
import Description from './Description';
import Hours from './Hours';
import Rate from './Rate';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceAddButton from './InvoiceTableAddButton';
import InvoiceTableRow from './InvoiceTableRow';



const InvoiceTable = ({initialInvoiceList}) => {
  const rows = initialInvoiceList.map((invoiceItem) => {
    const {id,description,rate,hours} = invoiceItem

    return (
        <InvoiceTableRow
        key={id}
        initialInvoiceData={{description,rate,hours}}
        initialIsEditing={false}
        />
    )
  })
    return (
    <div>
        <table>
            <thead>
                <InvoiceTableHeader />
            </thead>
            <tbody>
            {rows}
            </tbody>
            <tfoot>
                <InvoiceAddButton />
            </tfoot>
        </table>
    </div>
  )
}

export default InvoiceTable