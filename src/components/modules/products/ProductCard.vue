<template>
	<NCard size="small">
		<template #default>
			<img :src="props.product.image" alt="" :style="{ aspectRatio: '1 / 1', objectFit: 'contain', width: '100%' }" />
			<span class="h4">
				<NEllipsis line-clamp="2">{{ props.product.title }}</NEllipsis>
			</span>
		</template>
		<template #footer>
			<div class="flex justify-between items-center">
				<span class="h3">{{ props.product.price }}$</span>
				<NButton size="small" type="primary">Buy</NButton>
			</div>
		</template>
	</NCard>
</template>

<script setup lang="ts">
import { NCard, NEllipsis, NButton } from 'naive-ui'

import type { IProduct } from '@/types/modules/products'

const props = defineProps<{
	product: IProduct
}>()
</script>
