//class Welcome{

export default class Welcome{ //no need last export statement

    text:string;

    constructor(text: string){
        this.text = text;
    }

    displayMessage(){
        return this.text;
    }
}

//export default Welcome