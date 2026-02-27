const productService = require("../services/product.service");

exports.listProducts = async (req, res, next) => {
  try {
    console.log(req.query);
    const data = await productService.getProducts(req.query);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
