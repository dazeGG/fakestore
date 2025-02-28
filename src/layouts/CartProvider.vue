<template>
	<div>
		<CartModal :show="cartStore.showCart" />
		<NFloatButton type="primary" class="z-10" :bottom="50" :right="50" @click="cartStore.openCart">
			<Icon icon="mdi:cart" />
		</NFloatButton>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store'

import { NFloatButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import CartModal from '@/components/market/CartModal.vue'

const cartStore = useCartStore()
</script>
