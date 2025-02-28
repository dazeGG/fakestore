import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { IProduct, AddedProduct } from '@/types/modules/products'

export const useCartStore = defineStore('cart', () => {
	const showCart = ref<boolean>(false)

	const openCart = () => {
		showCart.value = true
	}

	const closeCart = () => {
		showCart.value = false
	}

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

	const addProduct = (product: IProduct) => {
		products.value.push({ ...product, count: 1 })
	}

	const incrementProduct = (product: IProduct): void => {
		const productIndex: number = getProductIndex(product.id)
		if (productIndex !== - 1) {
			products.value[productIndex].count++
			saveCart()
		}
	}

	const removeProduct = (product: IProduct): void => {
		const productIndex: number = getProductIndex(product.id)
		products.value.splice(productIndex, 1)
	}

	const decrementProduct = (product: IProduct): void => {
		const productIndex: number = getProductIndex(product.id)

		if (productIndex !== - 1) {
			products.value[productIndex].count--

			if (products.value[productIndex].count === 0) {
				removeProduct(product)
			}

			saveCart()
		}
	}

	const clearCart = () => {
		products.value = []
		saveCart()
	}

	const initCart = () => {
		products.value = JSON.parse(localStorage.getItem('cart') || '[]')
	}

	initCart()

	return {
		showCart,
		openCart,
		closeCart,
		products,
		totalProducts,
		getProductIndex,
		addProduct,
		incrementProduct,
		removeProduct,
		decrementProduct,
		clearCart,
	}
})
