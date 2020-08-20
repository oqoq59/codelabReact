const path = require('path');

module.exports = {
    name : 'dev', //웹팩 이름
    mode : 'development', //실서비스는 production
    devtool : 'eval', //실서비스는 hidden-source-map
    resolve : { //확장자를 생략하기 위한 설정
        extensions : ['.js', '.jsx'] //여기에 확장자를 적어줌
    },

    module : { //압축시 적용할 모듈 설정
        rules : [ //rules는 여러개의 규칙을 적용할 수 있다. 따라서 배열형태임
            {
                test: /\.jsx?/, //js와 jsx파일에 
                loader: 'babel-loader', //babel-loader을 적용
                options: { //option은
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                },
            },
        ],
    },

    entry : {
        app : ['./src/index.js'] //client.jsx에서 불러오는 모듈은 안적어줘도 자동으로 같이 패킹함
    }, //입력 파일 설정
    output : {
        path : path.join(__dirname,'/public/'), //현재디렉토리 + dist
        filename : 'bundle.js'
    }, //출력 파일 설정
    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },
};