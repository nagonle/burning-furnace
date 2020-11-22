const { Router } = require('express');
const Products = require('../database/models/products');
const { isPalindrome } = require('../utils/utils');

const router = Router()

router.post('/search', async (req, res, next) => {
  const query = req.body.query
  let skip = req.body.skip
  let limit = req.body.limit

  let options;
  let products;
  let msg;

  const id = parseInt(query)
  if (!isNaN(id)) {
    options = { id }
    products = await Products.find(options);
    msg = 'search by id'
  } else if (query.length < 3) {
    msg = 'insufficient length'
    products = []
  } else {
    msg = 'search by brand and id'

    if (skip === undefined || limit === undefined) {
      msg = 'skip or limit not specified'
      skip = 0
      limit = 3000
    }

    const regex = new RegExp(query, 'i')
    options = { $or: [
      { brand: { $regex: regex } },
      { description: { $regex: regex } }
    ]
    };
    products = await Products.find(options).skip(skip).limit(limit);

  }

  let discount = false
  if (products && isPalindrome(query)) {
    discount = true
    products = products.map((item) => {
      return {...item._doc, final_price: item.price*0.5}
    })
  }
  res.send({ msg, discount, products })

})


module.exports = router
