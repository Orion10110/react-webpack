const HOST = 'localhost'
const PORT = 8083

export default {
  devServer: {
    clientLogLevel: 'warning',
    contentBase: 'dist',
    compress: false,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    quiet: true
  }
}
