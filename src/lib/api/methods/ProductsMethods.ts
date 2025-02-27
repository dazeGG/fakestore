import API from '@/lib/api'

const MODULE_BASE_ROUTE = '/products'

class ProductsMethods {
	getCategories () {
		return API.get(MODULE_BASE_ROUTE + '/category')
	}
}

export default new ProductsMethods()
