<template>
	<div>
		<NH1>Categories</NH1>
		<NGrid cols="3" x-gap="" y-gap="" class="gap-4">
			<NGridItem v-for="category in categories" :key="category">
				<RouterLink :to="{ name: 'ProductsPage', params: { category } }">
					<NCard size="small">
						{{ category }}
					</NCard>
				</RouterLink>
			</NGridItem>
		</NGrid>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ProductsServices } from '@/lib/api/services'

import { NH1, NCard, NGrid, NGridItem } from 'naive-ui'

const categories = ref<string[]>([])

const loadCategories = async () => {
	categories.value = (await ProductsServices.getCategories()).categories
}

loadCategories()
</script>
