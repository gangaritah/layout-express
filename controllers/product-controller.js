const ProductRepository = require('../repositories/productRepository');

let getProducts = (req, res) => {
      ProductRepository.getAllProducts(products => {
    res.status(200).json(products);
  });
     
}


module.exports = {
  getProducts
}
