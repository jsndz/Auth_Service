const express = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
// const UserRepository = require('./repository/user-repository');
// const UserService = require('./service/user-service');
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
        // const serv = new UserService();

        // const nt = serv.createtoken({email:'jaison@admin.com',id:1})
        // console.log(nt);
        // const tkn='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaXNvbkBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjk1NTU5NzkyLCJleHAiOjE2OTU1NjMzOTJ9.RLYUPkgbUB7M0LQ5LmL7OixtRcdcw6CJuk4J5EFm6nk'
        // const response =serv.verifyToken(tkn);
        // console.log(response)
    })
}

prepareAndstartServer();