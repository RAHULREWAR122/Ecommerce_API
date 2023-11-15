const Product = require('../models/products');


// get all the products for finding product schema
module.exports.products = (req , res)=>{
//    found all products 
    Product.find({}, (err, products) => {
        //  if error in finding data
        if (err) {
            return res.status(404 , {
               message : 'Error in finding products'
            
            })
            // else if data is found
            } else {
                // get data for all products
            return res.status(200).json({
                 "data" : {
               products : products
                 } 
            });
            
    }
    })
}

// creating products with post request
module.exports.createProducts = (req, res) => {
    console.log('Request Body:', req.body.name);

    // if not present req.body[id ,name , quentity] , not found name , not found quentity then give error
    if (!req.body || !req.body.name || !req.body.quentity) {
        return res.status(400).json({
        
            message: "Invalid request. Name and quentity are not defined",
        
        });
    }
        // creating products 
     Product.create(req.body , (err , products)=>{
        if(err){
            res.send(err.message)
        }else{
            // send data and message with success request 200 
           return res.status(200).json({
            data : { 
                products : products ,    
              
                message :  "Added Successfully"
            }
            })
                
        }
    })
};

// delete product with delete request
module.exports.deleteProduct = (req,res)=>{
    //   delete One
    Product.deleteOne({_id : req.params.id} ,(err)=>{
        if(err){
            return res.send(err.message);
        }else{
            // send success request with req of 200  and message
            return res.status(200).json({
                data :{
                  message :  "product deleted "
            }
            })
        }
    })
}


// now update the product 
module.exports.updateProduct = (req , res)=>{ 
   
    Product.findById(req.params.id, function(err, products){
        if(err){
            res.send(err);
        }else{
            //  first use old quentity that is current 
            const oldQue = parseInt(products.quentity);
            // now use new quentity that we give in url /?number=rendomNumber
            const newQue = parseInt(req.query.number);
            // finally added both 
            const newQuentity = oldQue + newQue;
            // now update with new quentity
            Product.findByIdAndUpdate(req.params.id , {quentity : newQuentity}, (err, newProductQuentity)=>{
                
                if(err){
                    res.send(err.message);
                }else{
                    newProductQuentity.quentity = newQuentity;
                    return res.status(200).json({
                        data : {  
                        product: newProductQuentity,
                        },
                        message: 'product updated'
                    });
                }
            });
        }
    });

}

                                      // End