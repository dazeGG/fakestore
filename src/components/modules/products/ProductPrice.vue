<template>
	<div class="flex gap-1 items-center">
		<div class="h3">{{ props.product.price - 0.01 }}$</div>
		<span v-if="props.showFullPrice && fullPrice" class="line-through">{{ fullPrice.toFixed(2) }}$</span>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { IProduct } from '@/types/modules/products'

const props = defineProps<{
	product: IProduct
	showFullPrice?: boolean
}>()

const fullPrice = computed<number | null>(() => {
	if (props.product && props.product.discount) {
		return props.product.price / (1 - (props.product.discount / 100))
	} else {
		return null
	}
})
</script>
