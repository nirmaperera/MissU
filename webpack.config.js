const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        
       test: /\.(jpe?g|png|gif|svg)$/i,
       use: [
         'file-loader'
      ]


      }
    ]
  },

  devtool: "source-map",
  

  plugins: [htmlWebpackPlugin],

  devServer: {
    historyApiFallback: true,
  }


};
