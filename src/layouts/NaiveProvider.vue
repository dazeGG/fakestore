<template>
	<NConfigProvider :theme="lightTheme" :theme-overrides="naiveRemConvert">
		<NNotificationProvider>
			<NGlobalStyle />
			<slot></slot>
		</NNotificationProvider>
	</NConfigProvider>
</template>

<script setup lang="ts">
import { lightTheme } from 'naive-ui'
import naiveRemConvert from '@/lib/plugin/naiveRemConvert.ts'

import { NConfigProvider, NNotificationProvider, NGlobalStyle } from 'naive-ui'
</script>
