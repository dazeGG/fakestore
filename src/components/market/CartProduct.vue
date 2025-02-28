<template>
	<div>
		<div class="grid gap-4" :style="{ gridTemplateColumns: '5rem auto 10rem' }">
			<img :src="props.product.image" alt="" class="aspect-square object-contain" />
			<div class="flex flex-col gap-1">
				<div class="h6">{{ props.product.title }}</div>
				<span v-if="props.product.color" class="text-xs">Color: {{ props.product.color }}</span>
			</div>
			<div class="flex flex-col gap-2">
				<ProductPrice :product="props.product" show-full-price />
				<BuyButtonsSet :product="props.product" />
			</div>
		</div>
		<NDivider v-if="props.showDivider" />
	</div>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui'
import ProductPrice from '@/components/modules/products/ProductPrice.vue'
import BuyButtonsSet from '@/components/market/BuyButtonsSet.vue'

import type { AddedProduct } from '@/types/modules/products'

const props = defineProps<{
	product: AddedProduct
	showDivider?: boolean
}>()
</script>
