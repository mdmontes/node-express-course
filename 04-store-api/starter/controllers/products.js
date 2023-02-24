const Product = require('../models/product');

const getAllProductsStatic = async (req, res) =>{
	
	// throw new Error('testing async error')
	
	// const products = await Product.find({});
	// const products = await Product.find({featured: true});
	// const products = await Product.find({name: 'vase table'});
	
	// const search ='F';
	// const products = await Product.find({
	// 	name: {$regex: search, $options:'i'}
	// })
	
	// const products = await Product.find({}).sort('-name price');
	// const products = await Product.find({}).select('name price');
	// const products = await Product.find({}).sort('name').select('name price').limit(10).skip(3)
	const products = await Product
	.find({price:{$gt:30}})
	.sort('price')
	.select('name price')


	// res.status(200).json({msg:`products testing route`});
	res.status(200).json({products, nbHits:products.length});
}

const getAllProducts = async (req, res) =>{
	// console.log(req.query);
	// const products = await Product.find(req.query);
	const {featured, company, name, sort, fields, numericFilters} = req.query;
	const queryObject = {};

	if (featured){
		queryObject.featured = featured === 'true' ? true: false
	};
	if (company){
		queryObject.company = company
	};
	// if (name){
	// 	queryObject.name = name
	// };
	
	if (name){
		queryObject.name = {$regex: name, $options:'i'}
	};

	if(numericFilters){
		const operatorMap ={
			'>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
		};
		const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
		// console.log(`filter has been created with the following contents ${filters}`);
		const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
		// console.log(numericFilters);
		// console.log(queryObject)
	}
	// console.log(queryObject);

	// const products = await Product.find(queryObject);
	let result = Product.find(queryObject)
	if(sort){
		const sortList = sort.split(',').join('')
		result = result.sort(sortList)
	} else{
		result = result.sort('createAt')
	}
  
	if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }
	// console.log(result)


	
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 10;
	const skip = (page -1) * limit;

	result = result.skip(skip).limit(limit);
	// total of 23 items. If we have a limit of 7, we will have 4 pages (7,7,7,2)

	const products = await result

	// res.status(200).json({msg:`products route`});
	res.status(200).json({products, nbHits:products.length});

}

module.exports = {
	getAllProducts,
	getAllProductsStatic
}