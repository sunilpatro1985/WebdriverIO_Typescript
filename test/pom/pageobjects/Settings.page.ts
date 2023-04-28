import Page from "./page.js";

class SettingsPage extends Page {

    open(){
        return super.open("/settings")
    }
}
export default new SettingsPage();