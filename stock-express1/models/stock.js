var mongoose = require('mongoose');

var StockSchema = new mongoose.Schema({
	COMPANY_NAME:{type: String},
	SYMBOL :{type: String},
	MARKET_CAP: { type:String},
	CURRENT_PRICE :{type: String}
})

module.exports = mongoose.model('Stock',StockSchema);