<template>
	<NaiveProvider>
		<CartProvider>
			<RouterView />
		</CartProvider>
	</NaiveProvider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NaiveProvider from '@/layouts/NaiveProvider.vue'
import CartProvider from '@/layouts/CartProvider.vue'
</script>
