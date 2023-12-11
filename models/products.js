const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({   
    name : {
        type : String ,
    },
    quentity : {
        type : Number ,
    },

});

const Product = mongoose.model("Product" , productSchema);

module.exports = Product;

