import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { IProduct } from '@/types/modules/products'

type AddedProduct = IProduct & {
	count: number
}

export const useCartStore = defineStore('cart', () => {
	const products = ref<AddedProduct[]>([])

	const saveCart = () => {
		localStorage.setItem('cart', JSON.stringify(products.value))
	}

	const totalProducts = computed<number>(
		() => products.value.reduce((total, product) => total + product.count, 0),
	)

	const getProductIndex = (id: number): number => {
		return products.value.findIndex(product => product.id === id)
	}

	const addProduct = (product: IProduct): void => {
		const productIndex: number = getProductIndex(product.id)
		if (productIndex === - 1) {
			products.value.push({ ...product, count: 1 })
		} else {
			products.value[productIndex].count++
		}
		saveCart()
	}

	const initCart = () => {
		products.value = JSON.parse(localStorage.getItem('cart'))
	}

	initCart()

	return {
		products,
		totalProducts,
		getProductIndex,
		addProduct,
	}
})
