import { createApp } from 'vue'
import svgIcon from '../components/Icon/index.vue'

const app = createApp({})
// @ts-ignore
app.component(svgIcon.name, svgIcon)

interface RequireContext {
	keys (): string[];
	
	(id: string): any;
	
	<T> (id: string): T;
	
	resolve (id: string): string;
	
	/** The module id of the context module. This may be useful for module.hot.accept. */
	id: string;
}

// requires and returns all modules that match
const requireAll = (requireContext: RequireContext) => requireContext.keys().map(requireContext)
// import all svg
const req = require.context('../assets/svg', true, /\.svg$/)
requireAll(req)
