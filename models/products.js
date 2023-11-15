const mongoose = require('mongoose'); 
const productSchema = new mongoose.Schema({   
    name : {
        type : String ,
    },
    quentity : {
        type : Number ,
    },

},{
    versionKey : false
});

const Product = mongoose.model("Product" , productSchema);
module.exports = Product;

// mongodb+srv://Rahul:<password>@apicall.nwq9p0l.mongodb.net/?retryWrites=true&w=majority
