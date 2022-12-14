const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'app.bundle.js',
        path : path.resolve(__dirname, 'docs')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude : /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: [
                            "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    }
                },
            },
            {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
    
      
};