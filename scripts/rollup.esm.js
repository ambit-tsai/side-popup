import banner from './banner';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
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
        postcss({
            plugins: [
                autoprefixer,
            ],
        }),
        babel({
            presets: [
                '@babel/preset-env',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
            ],
        }),
    ],
};