const data = require ('../data/appData.json')

export default class appData{

    getEnv(){
        return process.env.Env
    }

    getUrl(){
        console.log("environment - " + this.getEnv())
        return data.urls[this.getEnv()]
    }

    getCredentials(){
        let username, password

        data.users.forEach((user) => {
            if((user.env).includes(this.getEnv())){
                username = user.username
                password = user.password
            }
        });
        return [{username, password}]
    }




}