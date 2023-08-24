let TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

  let globalId = 4

  const handlerFunctions = {

    getInvoices: (req,res) => {
        res.send(TEST_DATA)
    },
  
    addItem: (req,res) => {
        const {description} = req.body
        const newObj = {
            id: globalId,
            description,
            rate: 0,
            hours: 0,
        }

        TEST_DATA.push(newObj)

        globalId++

        console.log(newObj)
        res.send(newObj)
    },

    deleteItem: (req,res) => {
        const {id} = req.params

        let filteredList = TEST_DATA.filter((ele) => ele.id !== +id)

        TEST_DATA = filteredList

        res.send('Item deleted')
    },

    updateItem: (req,res) => {
        const {id} = req.params
        const {description,rate,hours} = req.body

        const index = TEST_DATA.findIndex(el => el.id === +id)
        const item = TEST_DATA[index]

        item.description = description ?? item 

        if(rate > 0 ){
            item.rate = +rate
        }

        item.hours = +(hours ?? item.hours)
        res.send(item)
    }
 



}

  export default handlerFunctions