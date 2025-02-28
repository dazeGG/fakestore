<template>
	<NModal :show="props.show" :style="{ maxWidth: '50rem' }" @mask-click="cartStore.closeCart">
		<NCard segmented>
			<template #header>
				Cart
			</template>
			<template #header-extra>
				<button @click="cartStore.closeCart">
					<Icon icon="material-symbols:close-rounded" width="24" height="24" />
				</button>
			</template>
			<template #default>
				<CartProduct
					v-for="(product, index) in cartStore.products"
					:key="product.id"
					:product="product"
					:show-divider="index !== cartStore.products.length - 1"
				/>
			</template>
		</NCard>
	</NModal>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store'

import { NModal, NCard } from 'naive-ui'
import { Icon } from '@iconify/vue'
import CartProduct from '@/components/market/CartProduct.vue'

const cartStore = useCartStore()

const props = defineProps<{
	show?: boolean
}>()
</script>
