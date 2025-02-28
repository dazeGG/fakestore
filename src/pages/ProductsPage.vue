<template>
	<Page :title="category" show-back-button>
		<NGrid cols="5" x-gap="" y-gap="" class="gap-4">
			<NGridItem v-for="product in productsOnPage" :key="product.id">
				<ProductCard :product="product" />
			</NGridItem>
		</NGrid>
		<NPagination
			v-model:page="pagination.page"
			:page-count="pagination.pages"
			size="small"
			class="mt-4 justify-center"
		/>
	</Page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { ProductsServices } from '@/lib/api/services'

import { NGrid, NGridItem, NPagination } from 'naive-ui'
import Page from '@/components/common/Page.vue'
import ProductCard from '@/components/modules/products/ProductCard.vue'

import type { IProduct } from '@/types/modules/products'

const category = computed<string>(() => useRoute().params.category as string)

const products = ref<IProduct[]>([])

const pagination = ref<{ page: number; pages: number }>({ page: 1, pages: 1 })

const productsOnPage = computed<IProduct[]>(() =>
	products.value.slice((pagination.value.page - 1) * 10, pagination.value.page * 10))

const loadProducts = async () => {
	products.value = (await ProductsServices.getProducts(category.value)).products
	pagination.value.pages = Math.ceil(products.value.length / 10)
}

const created = () => {
	loadProducts()
}

created()
</script>
