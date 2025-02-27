<template>
	<div>
		<div class="h1">Categories</div>
		<NGrid cols="4" x-gap="" y-gap="" class="gap-4">
			<NGridItem v-for="category in categories" :key="category">
				<RouterLink :to="{ name: 'ProductsPage', params: { category } }">
					<NCard size="small">
						<div class="text-center">
							<div class="h4">{{ category }}</div>
						</div>
					</NCard>
				</RouterLink>
			</NGridItem>
		</NGrid>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ProductsServices } from '@/lib/api/services'

import { NCard, NGrid, NGridItem } from 'naive-ui'

const categories = ref<string[]>([])

const loadCategories = async () => {
	categories.value = (await ProductsServices.getCategories()).categories
}

loadCategories()
</script>
