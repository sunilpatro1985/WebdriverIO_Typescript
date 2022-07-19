import WebTable from "../util/WebTable"

describe('Webtable', () => {
    it('verify Webtable...', async () => {
        browser.url("https://qavbox.github.io/demo/webtable/")
        await browser.pause(2000)
        //console.log(await $$("#table01 tbody tr").length)
        //console.log(await $$("#table01 tbody tr:nth-child(1) td").length)
        let table = new WebTable("#table01")

        expect(await table.getRowsCount()).toBe(3)

        expect(await table.getColumnCount(1)).toBe(5)

        await table.deleteRowHavingText("Functional")
        await browser.pause(2000)
        await table.clickOnCell(2,1)

        await browser.pause(4000)
    });

   
});