<template>
	<div class="flex flex-col justify-center items-center w-full" :style="{ height: '100vh' }">
		<NH1>404 | Not Found</NH1>
		<NButton @click="routeToProductsPage">Go to products page</NButton>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { NH1, NButton } from 'naive-ui'

const router = useRouter()

const routeToProductsPage = () => router.push('/products')
</script>
