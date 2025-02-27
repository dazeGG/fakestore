<template>
	<div>
		<h1>Categories</h1>
		<NGrid cols="3" x-gap="16" y-gap="16">
			<NGridItem v-for="category in categories" :key="category">
				<NCard>
					{{ category }}
				</NCard>
			</NGridItem>
		</NGrid>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CategoriesServices } from '@/lib/api/services'

import { NCard, NGrid, NGridItem } from 'naive-ui'

const categories = ref<string[]>([])

const loadCategories = async () => {
	categories.value = (await CategoriesServices.getCategories()).categories
}

loadCategories()
</script>
