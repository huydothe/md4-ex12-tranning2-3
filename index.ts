import express from 'express';
import bodyParser from "body-parser";
import * as mongoose from "mongoose";
import router from "./src/router/user.router";

const port = 3000;
const app = express();

app.use(bodyParser.json());
const DB_URL = "mongodb://localhost:27017/huydo";

mongoose.connect(DB_URL)
.then(()=>{
    console.log(`DB connected`);
})
.catch(err => {
    console.log(`Connect fail`);
});

app.use('/api/v1',router)

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
export default app;