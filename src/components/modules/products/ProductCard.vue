<template>
	<NCard size="small">
		<template #default>
			<RouterLink :to="routerLinkTo">
				<img :src="props.product.image" alt="" class="w-full aspect-square object-contain" />
			</RouterLink>
			<RouterLink :to="routerLinkTo" class="h4">
				<NEllipsis line-clamp="2" :tooltip="{ delay: 200 }">{{ props.product.title }}</NEllipsis>
			</RouterLink>
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
import { computed } from 'vue'

import { NCard, NEllipsis, NButton } from 'naive-ui'

import type { IProduct } from '@/types/modules/products'

const props = defineProps<{
	product: IProduct
}>()

const routerLinkTo = computed(() => ({ name: 'ProductPage', params: { productId: props.product.id } }))
</script>
