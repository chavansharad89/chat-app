const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('./container');


container.resolve((users) => {
    const app = SetupExpress();

    function SetupExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen(3100, () => {
            console.log(`Server is running at port : 3100`);
        });
        ConfigureExpress(app);
        //setup routers
        const router = require('express-promise-router')();
        users.SetRouting(router);
        
        app.use(router);
    }


    function ConfigureExpress(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser);
    }
     
});