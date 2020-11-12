<template>
	<Icon name="add" size="40"></Icon>
	<Icon name="alipay" color="red"></Icon>
	<hr>
	<Button round size="large">default</Button>
	<Button>default</Button>
	<Button round type="primary">primary</Button>
	<Button round size="small" type="primary">primary</Button>
	<Button round size="large" type="primary">primary</Button>
	<Button type="info">info</Button>
	<Button type="warning">warning</Button>
	<Button type="success">success</Button>
	<Button type="error" disabled>error</Button>
	<Button type="text">text</Button>
	<Button type="primary" loading>加载中</Button>
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
