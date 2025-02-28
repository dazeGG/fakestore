<template>
	<div class="page">
		<NButton v-if="props.showBackButton" size="small" @click="goBack">
			<template #icon>
				<Icon icon="solar:arrow-left-linear" />
			</template>
			<template #default>
				Go back
			</template>
		</NButton>
		<div class="h1 mb-4">{{ props.title }}</div>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'

const router = useRouter()

const props = defineProps<{
	title: string
	showBackButton?: boolean
}>()

const goBack = () => {
	router.back()
}
</script>
