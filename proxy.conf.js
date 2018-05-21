let PROXY_CONFIG = [
    {
        context: [
            '/api',
            '/admin',
            '/media',
            '/static',
        ],
        target: "http://localhost:8000",
    }
];

module.exports = PROXY_CONFIG;
