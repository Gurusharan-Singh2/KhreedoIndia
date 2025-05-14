import express from 'express';
import cors from "cors";

import dotenv from 'dotenv';
dotenv.config();


import cookieParser from 'cookie-parser';

import router from './routes/auth_router';
import  swaggerUi  from 'swagger-ui-express';
import { errorMiddleware } from 'packages/error-handler/error-middleware';



const swaggerDocument =require('swagger-output.json');







const port = process.env.PORT || 6001;

const app = express();

app.use(
    cors({
      origin: ["http://localhost:3000"],
      allowedHeaders: ["Authorization", "Content-Type"],
      credentials: true,
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send({ 'message': 'I am auth'});
});

// routes
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/docs-json',(req,res)=>{
  res.json(swaggerDocument)
})
app.use("/api",router)


// error checking
app.use(errorMiddleware)  
const server=app.listen(port, () => {
    console.log(`Auth service running at http://localhost:${port}`);
});

server.on("error",(err)=>{
    console.log("Server Error :", err);
    
})
