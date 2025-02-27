<template>
	<div>
		<NH1>Products</NH1>
		<NH3>Category: {{ route.params.category }}</NH3>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { NH1, NH3 } from 'naive-ui'

const route = useRoute()
</script>
