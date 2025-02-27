<template>
	<div class="page">
		<div class="h1 mb-4">{{ props.title }}</div>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	title: string
}>()
</script>
