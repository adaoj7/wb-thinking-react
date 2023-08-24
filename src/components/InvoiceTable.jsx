import './InvoiceTable.css';
import React from 'react'
import ModeButtons from './ModeButtons';
import Description from './Description';
import Hours from './Hours';
import Rate from './Rate';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceAddButton from './InvoiceTableAddButton';
import InvoiceTableRow from './InvoiceTableRow';
import { useState } from 'react';
import axios from 'axios';

// let globalId = 5

const InvoiceTable = ({initialInvoiceList}) => {

    const [currentList,setCurrentList] = useState(initialInvoiceList)

    const addRow = async () => {
        
        let {data} = await axios.post('/addInvoice', {description: 'Description goes here'})
        
        const newInvoiceList = {...data}
        setCurrentList([...currentList,newInvoiceList])
        console.log(data)
        console.log(initialInvoiceList)
        // const newInvoiceList = [...currentList]
        // let newRow = {
        //     id: globalId,
        //     description: 'Description',
        //     rate: '',
        //     hours: '',
        //     isEditing: true
        // }

        // newInvoiceList.push(newRow)
         

        // globalId++
    }

    const deleteRow = async (id) => {

        const {data} = await axios.delete(`/removeInvoice/${id}`)

        if(!data.error){
            const newInvoiceList = [...currentList]
            const filteredList = newInvoiceList.filter((el)=>el.id !== id)
            setCurrentList(filteredList)
        }
        console.log(data)
        console.log(id)
    }

    const rows = currentList.map((invoiceItem) => {
    const {id,description,rate,hours} = invoiceItem

    return (
        <InvoiceTableRow
        key={id}
        id={id}
        initialInvoiceData={{id,description,rate,hours}}
        initialIsEditing={false}
        deleteFunc={() => deleteRow(id)}
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
                <InvoiceAddButton addClick={addRow} />
            </tfoot>
        </table>
    </div>
  )
}

export default InvoiceTable