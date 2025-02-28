<template>
	<div>
		<div class="grid gap-4" :style="{ gridTemplateColumns: '5rem 1fr auto auto' }">
			<img :src="props.product.image" alt="" class="aspect-square object-contain" />
			<div class="flex flex-col gap-1">
				<div class="h6">{{ props.product.title }}</div>
				<span v-if="props.product.color" class="text-xs">Color: {{ props.product.color }}</span>
			</div>
			<div class="flex flex-col gap-2">
				<ProductPrice :product="props.product" show-full-price />
				<BuyButtonsSet :product="props.product" class="self-end" />
			</div>
			<NButton
				size="small"
				ghost
				round
				type="error"
				class="self-center"
				@click="removeProduct"
			>
				<template #icon>
					<Icon icon="material-symbols:close-rounded" />
				</template>
			</NButton>
		</div>
		<NDivider v-if="props.showDivider" />
	</div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store'

import { NButton, NDivider } from 'naive-ui'
import { Icon } from '@iconify/vue'
import ProductPrice from '@/components/modules/products/ProductPrice.vue'
import BuyButtonsSet from '@/components/market/BuyButtonsSet.vue'

import type { AddedProduct } from '@/types/modules/products'

const cartStore = useCartStore()

const props = defineProps<{
	product: AddedProduct
	showDivider?: boolean
}>()

const removeProduct = () => {
	cartStore.removeProduct(props.product)
}
</script>
