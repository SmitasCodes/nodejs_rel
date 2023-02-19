require('dotenv').config();
const connectDB = require('./config/db')
connectDB();

const express = require('express');
const app = express();
app.use(express.json());

const createUser = require('./controllers/usersControllers');
const {createAd,getAds} = require('./controllers/adsControllers');

app.post('/api/user',createUser);
app.post('/api/ad',createAd);
app.get('/api/ads',getAds);

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});