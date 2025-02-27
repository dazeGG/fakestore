import { CategoriesMethods } from '@/lib/api/methods'

class CategoriesServices {
	async getCategories () {
		const res = await CategoriesMethods.getCategories()
		return res.data
	}
}

export default new CategoriesServices()
