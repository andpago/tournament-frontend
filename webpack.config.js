module.exports = {
    entry: './src/index.jsx',
    
    output: {
        path: '/home/andpago/Desktop/tournament/static/',
        filename: 'index.js'
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: `${__dirname}/src`,
                loader: 'babel-loader?presets[]=react&presets[]=env&presets[]=stage-1',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                loader: 'url-loader?limit=4096&name=[path][name].[ext]',
            }
        ]
    },
    
    mode: 'development'
};

