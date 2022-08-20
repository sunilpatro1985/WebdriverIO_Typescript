class locators {
    getTableData(rowIndex, columnIndex){
        return $(`table[id=\'table01\'] tr:nth-child(${rowIndex}) td:nth-child(${columnIndex})`) //using css seelctor
    }
    getTextBoxIndex(index){
        return $(`(//input[@type=\'text\'])[${index}]`)
    }

}
export default new locators()