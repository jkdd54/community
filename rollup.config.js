import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'node_modules/@worldcoin/idkit/build/index.js',
  output: {
    file: 'public/js/@worldcoin/index.umd.min.js',
    format: 'umd',
    name: 'IDKitWidget',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  external: ['react', 'react-dom', '@worldcoin/idkit-core', 'prop-types'],
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'react': ['useMemo', 'memo'],
        'react/jsx-runtime': ['jsx', 'Fragment']
      }
    })
  ]
};
