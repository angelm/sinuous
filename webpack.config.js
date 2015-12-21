var path = require('path');

module.exports = {

    //context: __dirname,
    context: path.resolve('./src/js/'),  // relative path dir for the entry key
    //context: __dirname + '/src/js',

    entry: ['./app.js', './css.js'],
    //entry: './foo.js',

    output: {
        path: path.resolve('build/js'),  // destination for build output
        publicPath: '/js',               // relative path it will be served from
        filename: 'bundle.js'            //
    },

    devServer: {
        contentBase: 'public'
    },

    module: {

        loaders: [ {
            test: /\.js$/,
            except: ['node_modules'],
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            include: path.join(__dirname, "src"),
            loader: "style-loader!css-loader"

        },{
            test: /\.scss$/,
            except: ['node_modules'],
            loader: "style-loader!css-loader!sass-loader"
        } ]
    },

    devtool: "source-map",

    watch: true

};