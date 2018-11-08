import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/index.ts',
  dest: './dist/index.js',
  format: 'es',
  plugins: [
    typescript()
  ]
}