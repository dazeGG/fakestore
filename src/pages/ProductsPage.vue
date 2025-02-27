<template>
	<div>
		<div class="h1">{{ category }}</div>
		<NGrid cols="4" x-gap="" y-gap="" class="gap-4">
			<NGridItem v-for="product in products" :key="product.id">
				<ProductCard :product="product" />
			</NGridItem>
		</NGrid>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ProductsServices } from '@/lib/api/services'

import { NGrid, NGridItem } from 'naive-ui'
import ProductCard from '@/components/modules/products/ProductCard.vue'

import type { IProduct } from '@/types/modules/products'

const { params: { category } } = useRoute()

const products = ref<IProduct[]>([])

const loadProducts = async () => {
	products.value = (await ProductsServices.getProducts(category as string)).products
}

loadProducts()
</script>
