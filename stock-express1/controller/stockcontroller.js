var Stock = require('../models/stock');

exports.createStock = function(req,res,next){
	var stockOb = new Stock({ 
		COMPANY_NAME: req.body.name,
		SYMBOL: req.body.SYMBOL,
		MARKET_CAP: req.body.MARKET_CAP,
		CURRENT_PRICE: req.body.CURRENT_PRICE
})
	console.log(stockOb)
	stockOb.save(function(err){
		if (err){
			console.log({err: 'Stock cant save'});
		}else(
			console.log({success:"Stock saved successfully"}))
	})
}
exports.getStock = function(req,res,next){
	Stock.find()
	.exec(function(err,stock_list){
		console.log(stock_list);
		res.json(stock_list)
	})
} 
exports.deleteStock = function(req,res,next){
	console.log(req.params);
	Stock.findById(req.params.id).remove()

	.exec(function(){
		res.json({msg:"Stock deleted"});
	})
}