<template>
	<Page :title="category" show-back-button>
		<NGrid cols="4" x-gap="" y-gap="" class="gap-4">
			<NGridItem v-for="product in products" :key="product.id">
				<ProductCard :product="product" />
			</NGridItem>
		</NGrid>
	</Page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { ProductsServices } from '@/lib/api/services'

import { NGrid, NGridItem } from 'naive-ui'
import Page from '@/components/common/Page.vue'
import ProductCard from '@/components/modules/products/ProductCard.vue'

import type { IProduct } from '@/types/modules/products'

const category = computed<string>(() => useRoute().params.category as string)

const products = ref<IProduct[]>([])

const loadProducts = async () => {
	products.value = (await ProductsServices.getProducts(category.value)).products
}

const created = () => {
	loadProducts()
}

created()
</script>
