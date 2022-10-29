const fs = require('fs');

        // directory path
        const dir = 'reports/allure/allure-results';

        // delete directory recursively
        try {
            if(fs.existsSync(dir)){
                fs.rmSync(dir, { recursive: true });
                console.log(`${dir} is deleted!`);
            }
        } catch (err) {
            console.error(`Error while deleting ${dir}.`);
            /*if (!fs.existsSync(dir)){
                fs.mkdirSync(dir, { recursive: true });
                console.log(`${dir} is created!`);
            }*/
        }