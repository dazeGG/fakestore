import API from '@/lib/api'

const MODULE_BASE_ROUTE = '/products'

class ProductsMethods {
	getCategories () {
		return API.get(MODULE_BASE_ROUTE + '/category')
	}

	getProducts (category: string) {
		return API.get(MODULE_BASE_ROUTE + '/category', { params: { type: category } })
	}

	getFirstProduct (category: string) {
		return API.get(MODULE_BASE_ROUTE + '/category', { params: { type: category, limit: 1 } })
	}

	getProduct (id: number) {
		return API.get(MODULE_BASE_ROUTE + '/' + id)
	}
}

export default new ProductsMethods()
