import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();


const PORT = process.env.PORT || 7004
app.listen(PORT,()=>{
    console.log(`Sever is running on port ${PORT}`);
})