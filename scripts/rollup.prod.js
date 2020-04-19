import {string} from 'rollup-plugin-string';
import babel from 'rollup-plugin-babel';
import {terser} from "rollup-plugin-terser";


export default {
    input: 'src/SidePopup.js',
    output: {
        file: 'dist/side-popup.min.js',
        format: 'umd',
        name: 'SidePopup',
        globals: {
            jquery: 'jQuery',
        },
        sourcemap: true,
    },
    external: [
        'jquery',
    ],
    plugins: [
        string({
            include: '**/*.css',
        }),
        babel({
            presets: [
                '@babel/preset-env',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
            ],
        }),
        terser(),
    ],
    watch: {
        include: 'src/**',
    },
};