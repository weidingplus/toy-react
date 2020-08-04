module.exports={
    entry: {
        main: './main.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:[[
                            "@babel/plugin-transform-react-jsx",
                            {pragma:"ToyReact.createElement"}//如果不添加慈航，则默认react
                        ]]
                    }
                }
            }
        ]
    },


    /** 打包时，会有所改变,如果都打包成一行，是否会有性能问题
      * 是否可以拆分多文件打包？
    * */
    mode:"development",
    optimization:{
        minimize:false
    }
};


// module.exports = {
//     entry: './main.js'
// };
  