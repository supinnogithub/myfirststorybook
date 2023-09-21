import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript2';

// rollup.config.mjs
export default {
	input: 'src/main.ts',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
    plugins: [
        angular(),
        typescript(),
    ],
};