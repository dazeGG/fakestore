<template>
	<NModal v-model:show="show" :style="{ maxWidth: '50rem' }">
		<NCard segmented>
			<template #header>
				Cart
			</template>
			<template #default>
				Products
			</template>
		</NCard>
	</NModal>
</template>

<script setup lang="ts">
import { NModal, NCard } from 'naive-ui'

const show = defineModel<boolean>('show', { default: false })
</script>
