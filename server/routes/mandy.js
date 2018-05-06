var express = require('express');
var router = express.Router();
var fs = require("fs");

const getScheduledMaxPages = async () => {
    return new Promise((resolve, reject) => fs.readFile('./config/mandy/scheduler.json', 'utf8', (err, data) => {
        if (err){
            reject(err);
        } else {
            obj = JSON.parse(data);
            console.log(obj.availablePages);
            while(obj.schedule.length !== 0 && new Date(obj.schedule[0].timestamp * 1000) < new Date()) {
                obj.availablePages = obj.schedule[0].maxPages;
                obj.schedule.splice(0, 1);
            }
            json = JSON.stringify(obj);
            fs.writeFile('./config/mandy/scheduler.json', json, 'utf8', (err) => {
                if(err) {
                    console.error(err);
                }
            });
            resolve(obj.availablePages);
        }}));
};

router.get('/max-pages', async (req, res, next) => {
    getScheduledMaxPages().then((maxPages) => {
        res.send({maxPages: maxPages});
    }).catch((err) => console.error(err));
});



module.exports = router;
