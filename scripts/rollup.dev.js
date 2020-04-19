import {string} from 'rollup-plugin-string';
import babel from 'rollup-plugin-babel';


export default {
    input: 'src/SidePopup.js',
    output: {
        file: 'docs/side-popup.js',
        format: 'umd',
        name: 'SidePopup',
        globals: {
            jquery: 'jQuery',
        },
    },
    external: [
        'jquery',
    ],
    plugins: [
        string({
            include: '**/*.css',
        }),
        babel({
            plugins: [
                '@babel/plugin-proposal-class-properties',
            ],
        }),
    ],
    watch: {
        include: 'src/**',
    },
};