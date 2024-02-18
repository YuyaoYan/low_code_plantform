<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import Index from './components/Index.vue'

export default {
	name: 'App',
	components: {
		Index
	}
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
}
#app {
	width: calc(100% - 16px);
	height: calc(100% - 16px);
}
</style>
