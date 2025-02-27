import { ProductsMethods } from '@/lib/api/methods'

class ProductsServices {
	async getCategories () {
		const res = await ProductsMethods.getCategories()
		return res.data
	}
}

export default new ProductsServices()
