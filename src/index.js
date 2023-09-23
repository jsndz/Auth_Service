const express = require('express');

const {PORT} = require('./config/serverConfig');

const app = express();

const prepareAndstartServer = () => {
    app.listen(PORT, () => {
        console.log(`server Started On Port :${PORT}`);
    })
}

prepareAndstartServer();