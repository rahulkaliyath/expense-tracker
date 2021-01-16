const express =require('express');
const connectDB = require('./config/mongo');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/expense', require('./routes/api/expense'));

app.listen(PORT, (err)=> {
    if(err) throw err;
    console.log(`Server is running on PORT:${PORT}`);
});