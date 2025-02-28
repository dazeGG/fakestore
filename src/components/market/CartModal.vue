<template>
	<NModal :show="props.show" :style="{ maxWidth: '50rem' }" @mask-click="cartStore.closeCart">
		<NCard segmented>
			<template #header>
				<div class="h2">Cart</div>
			</template>
			<template #header-extra>
				<div class="flex items-start gap-4">
					<NButton size="small" @click="cartStore.clearCart">Clear cart</NButton>
					<button @click="cartStore.closeCart">
						<Icon icon="material-symbols:close-rounded" width="24" height="24" />
					</button>
				</div>
			</template>
			<template #default>
				<NEmpty v-if="cartStore.products.length === 0">There's empty. Add something to the cart.</NEmpty>
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

import { NModal, NCard, NButton, NEmpty } from 'naive-ui'
import { Icon } from '@iconify/vue'
import CartProduct from '@/components/market/CartProduct.vue'

const cartStore = useCartStore()

const props = defineProps<{
	show?: boolean
}>()
</script>
