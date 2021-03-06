const { assert: {equal, isFunction, isNumber, deepEqual, isObject, isArray, exists, done } } = require('chai');
const { addNewProduct, getSingleProduct, removeProduct, getActiveProducts, getStaleProducts } = require('../app/models/Product');
const { listStaleProducts } = require('../app/controllers/productCtrl');
describe('Products model', () => {
  
  // Bobby: tests for getting active customer product list
  describe('getActiveProducts fetches products', () => {
    it('should exist', () => {
      isFunction(getActiveProducts);
    });
    // Bobby: getActiveProducts is a function
    it('should be a function', () => {
      isFunction(getActiveProducts);
    });
    // Bobby: removeProduct is a promise
    it('should return a promise', () => {
      isFunction(removeProduct);
    });
    // Bobby: insures the promise is resolved 
    it('promise resolved', function() {
      removeProduct().then(Data => {
        isArray(Data);
      });
    });
  });

  // B&D: Tests stale products
  describe('getStaleProducts', () => {
    // B&D: tests to see that getStaleProducts is a function
    it('should be a function', () => {
      isFunction(getStaleProducts);
    });
    // B&D: tests to make sure getStaleProducts returns a promise
    it('should return a promise', () => {
      isFunction(getStaleProducts);
    });
    // B&D: insures the promise is resolved and is an array
    it("promise is resolved", function() {
      getStaleProducts().then(Data => {
        isArray(Data);
      });
     // B&D: tests to see that listStaleProducts is a function
     it('should be a function', () => {
      isFunction(listStaleProducts);
    });
    // B&D: tests to make sure listStaleProducts returns a promise
    it('should return a promise', () => {
      isFunction(listStaleProducts);
    });
    // B&D: insures the promise is resolved and is an array
    it("promise is resolved", function() {
      listStaleProducts().then(Data => {
        isArray(Data);
      });
    });
  });
  });
  //Tests for the activeCustomer model
  describe('addSingleProduct', () => {
    it('should be a function', () => {
      isFunction(addNewProduct);
    });
  });
});


  // it('should be a function', () => {
  //   isFunction(getActiveCustomer);
  // });

  // it('addSingleProduct should accept an object as its argument and output that object',  () => {
  //   id = null;

    // let body = {
    //   "title": "teenage mustant ninja turtles",
    //   "price": "567",
    //   "description": "dissapointed hank",
    //   "type_id": "6",
    //   "customer_id": "688"
    // };

  //   addSingleProduct(body)
  //   .then( (productid) => {
  //     id = productid;
  //     getSingleProduct(id)
  //     .then( (product) => {
  //       isObject(product);
  //     })
  //     .catch( (err) => {
  //       console.log("error getting cust info", err)
  //     });
  //   })
  //   .catch( (err) => {
  //     console.log("err getting cust info", err)
  //   });
  // });

  // Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
  // describe('removeItem', () => {
  //   it('should be a function', () => {
  //     isFunction(removeItem);
  //   });
  // });
