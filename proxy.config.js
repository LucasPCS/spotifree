const proxy = [
    {
        context: '/api',
        target: 'https://localhost:44354',
        secure: false
    },
    {
        context: '/file',
        target: 'http://localhost:8887',
        secure: false,
        pathRewrite: {'^/file' : ''}
    }
];
module.exports = proxy;