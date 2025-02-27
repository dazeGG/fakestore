<template>
	<h1>Categories</h1>
	{{ categories }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CategoriesServices } from '@/lib/api/services'

const categories = ref<string[]>([])

const loadCategories = async () => {
	categories.value = (await CategoriesServices.getCategories()).categories
}

loadCategories()
</script>
