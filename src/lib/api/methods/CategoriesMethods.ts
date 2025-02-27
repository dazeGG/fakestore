import API from '@/lib/api'

class CategoriesMethods {
	getCategories () {
		return API.get('/products/category')
	}
}

export default new CategoriesMethods()
