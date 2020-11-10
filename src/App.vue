<template>
	<Icon name="add" size="40"></Icon>
	<Icon name="alipay" color="red"></Icon>
	<hr>
	<Button>click</Button>
	<Button type="primary">primary</Button>
	<Button type="info">info</Button>
	<Button type="warning">warning</Button>
	<Button type="success">success</Button>
	<Button type="error">error</Button>
	<Button type="text">text</Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from './components/Icon/index.vue'
import Button from './components/Button/index.vue'

export default defineComponent({
	name: 'App',
	components: { Icon, Button },
});
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
}
</style>
