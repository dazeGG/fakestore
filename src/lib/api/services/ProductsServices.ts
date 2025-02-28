import { ProductsMethods } from '@/lib/api/methods'

class ProductsServices {
	async getCategories () {
		const res = await ProductsMethods.getCategories()
		return res.data
	}

	async getCategoriesImages (categories: string[]): Promise<Record<string, string>> {
		const categoriesImages: Record<string, string> = {}
		const requests = categories.map(category => ProductsMethods.getFirstProduct(category))

		const results = await Promise.all(requests)

		results.forEach((res, index) => {
			categoriesImages[categories[index]] = res.data.products[0].image
		})

		return categoriesImages
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
