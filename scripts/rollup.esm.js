import banner from './banner';
import {string} from 'rollup-plugin-string';
import babel from 'rollup-plugin-babel';


export default {
    input: 'src/SidePopup.js',
    output: {
        file: 'dist/side-popup.mjs',
        format: 'es',
        name: 'SidePopup',
        globals: {
            jquery: 'jQuery',
        },
        banner,
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
            plugins: [
                '@babel/plugin-proposal-class-properties',
            ],
        }),
    ],
};