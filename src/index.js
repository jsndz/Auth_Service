const express = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const UserRepository = require('./repository/user-repository');
const app = express();

const prepareAndstartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT, async () => {
        
        console.log(`server Started On Port :${PORT}`);
        // const repo = new UserRepository();
        // const response = await repo.getById(1)
        // console.log(response);
    })
}

prepareAndstartServer();