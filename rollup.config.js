import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/index.js',
    dest: 'index.js',
    format: 'umd',
    moduleName: 'bdshare',
    plugins: [
        babel({presets: ['es2015-rollup']})
    ]
}
