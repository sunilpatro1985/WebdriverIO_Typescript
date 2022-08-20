export default class WebTable{
    public table

    constructor(tableLocator: string){
         this.table = $(`${tableLocator}`)
    }

    async getAllRows(){
        return await this.table.$$("tbody tr")
    }

    async getRowsCount(){
        return (await this.table.$$("tbody tr")).length
    }

    async getColumnCount(row){
        let el = await this.table.$$(`tbody tr:nth-child(${row}) td`)
        return await el.length
    }

    async getAllData(){
        return await this.table.$$("tbody tr td")
    }

    async getElementText(row, column){
        let el = await this.table.$(`tbody tr:nth-child(${row}) td:nth-child(${column})`)
        return await el.getText()
    }

    async clickOnCell(row, column){
        let el = await this.table.$(`tbody tr:nth-child(${row}) td:nth-child(${column})`)
        await el.click()
    }

    async deleteRowHavingText(text:string){
        let rows = await this.getAllRows()
        await rows.forEach(async row=>{
            let cells = await row.$$("td")
            await cells.forEach(async cell =>{
                if((await cell.getText()).includes(text)){
                    await cells[0].click()
                    await cells[4].click()
                }
            })
        })

          /*for(let item of items){
            let cells = await item.$$("td")
            for(let cell of cells){
                if((await cell.getText()).includes(text)){
                    await cells[0].click()
                    await cells[4].click()
                }
            }
        }*/

    }



}