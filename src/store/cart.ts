import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { IProduct } from '@/types/modules/products'

export const useCartStore = defineStore('cart', () => {
	const products = ref<IProduct[]>([])

	return {
		products,
	}
})
