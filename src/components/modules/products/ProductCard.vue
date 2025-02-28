<template>
	<NCard size="small">
		<template #default>
			<RouterLink :to="routerLinkTo">
				<img :src="props.product.image" alt="" class="w-full aspect-square object-contain" />
			</RouterLink>
			<RouterLink :to="routerLinkTo" class="h5">
				<NEllipsis line-clamp="2" :tooltip="{ delay: 200 }">{{ props.product.title }}</NEllipsis>
			</RouterLink>
		</template>
		<template #footer>
			<div class="flex flex-col gap-2">
				<ProductPrice :product="product" show-full-price />
				<BuyButtonsSet :product="props.product" show-cart-button />
			</div>
		</template>
	</NCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { NCard, NEllipsis } from 'naive-ui'
import BuyButtonsSet from '@/components/market/BuyButtonsSet.vue'
import ProductPrice from '@/components/modules/products/ProductPrice.vue'

import type { IProduct } from '@/types/modules/products'

const props = defineProps<{
	product: IProduct
}>()

const routerLinkTo = computed(() => ({ name: 'ProductPage', params: { productId: props.product.id } }))
</script>
