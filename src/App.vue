<template>
	<Icon name="add" size="40"></Icon>
	<Icon name="alipay" color="red"></Icon>
	<hr>
	<Button loading disabled size="large">default</Button>
	<Button type="primary" disabled size="small">primary</Button>
	<Button type="info" disabled>info</Button>
	<Button type="warning" disabled>warning</Button>
	<Button type="success" disabled>success</Button>
	<Button type="error" disabled>error</Button>
	<Button type="text" loading  disabled>text</Button>
	<Button type="primary" disabled loading>加载中</Button>
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
