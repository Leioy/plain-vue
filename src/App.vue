<template>
	<Icon name="add" size="40"></Icon>
	<Icon name="alipay" color="red"></Icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from './components/Icon/index.vue'

export default defineComponent({
	name: 'App',
	components: { Icon },
});
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
