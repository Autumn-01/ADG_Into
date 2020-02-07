const express= require('express');
const app=express();
app.get('/', (req, res) => {
        res.send('Hello World!!!');
    });
app.get('/name', (req, res) => {
         res.send('Diya Patel');
    });
app.get('/team', (req,res)=>{	
         res.send('Jan, Feb, Mar, Apr, May');
    });
app.listen(3000, () => console.log('Listening to port 3000...'));