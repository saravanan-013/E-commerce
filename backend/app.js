const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');
dotenv.config();

const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use(express.json());
app.use(cors({origin:"https://e-commerce-eta-fawn.vercel.app"}));




app.use('/api/v1/',products);
app.use('/api/v1/',orders);



app.get('/',(req,res)=>{
    res.send("endpoints are working")
})
app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});