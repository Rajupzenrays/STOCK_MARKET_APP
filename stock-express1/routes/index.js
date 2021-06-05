var express = require('express');
var router = express.Router();
var stockController = require('../controller/stockcontroller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/Stock', stockController.createStock);
router.get('/Stock', stockController.getStock);
router.delete('/Stock/:id', stockController.deleteStock);



module.exports = router;
