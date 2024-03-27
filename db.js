const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://mpanindrem:maheshwar1234*@cluster0.1wdhch5.mongodb.net/',{useNewUrlParser:true});

const db=mongoose.connection;
db.on('errer',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('Database Connected Successfully..');
})