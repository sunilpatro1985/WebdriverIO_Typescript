class locators {
    getTexboxByIndex(index){
        return $(`(//input[@type=\"text\"])[${index}]`)
    }

    
}
export default new locators()