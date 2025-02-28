<template>
	<Page title="Categories">
		<NGrid cols="4" x-gap="" y-gap="" class="gap-4">
			<NGridItem v-for="category in categories" :key="category">
				<RouterLink :to="{ name: 'ProductsPage', params: { category } }">
					<NCard size="small">
						<div class="text-center">
							<img :src="categoriesImages[category]" alt="" class="w-full aspect-square object-contain" />
							<div class="h4">{{ category }}</div>
						</div>
					</NCard>
				</RouterLink>
			</NGridItem>
		</NGrid>
	</Page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ProductsServices } from '@/lib/api/services'

import { NCard, NGrid, NGridItem } from 'naive-ui'
import Page from '@/components/common/Page.vue'

const categories = ref<string[]>([])
const categoriesImages = ref<Record<string, string>>({})

const loadCategories = async () => {
	categories.value = (await ProductsServices.getCategories()).categories
}

const loadCategoriesImages = async () => {
	categoriesImages.value = await ProductsServices.getCategoriesImages(categories.value)
}

const created = async () => {
	await loadCategories()
	await loadCategoriesImages()
}

created()
</script>
