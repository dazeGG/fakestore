import { ProductsMethods } from '@/lib/api/methods'

class ProductsServices {
	async getCategories () {
		const res = await ProductsMethods.getCategories()
		return res.data
	}

	async getProducts (category: string) {
		const res = await ProductsMethods.getProducts(category)
		return res.data
	}

	async getProduct (id: number) {
		const res = await ProductsMethods.getProduct(id)
		return res.data
	}
}

export default new ProductsServices()
