require('dotenv').config();

if (!process.env.ASSETS_DIR) {
    process.env.ASSETS_DIR = '';
}

const path = require('path');
const src = path.resolve(__dirname, '../' + process.env.ASSETS_DIR + 'resources');
const build = path.resolve(__dirname, '../' + process.env.ASSETS_DIR + 'dist');

module.exports = {
    src: src,
    build: build,
    entries: {
        'main': src + '/js/main.js',
    },
    filesToCopy: [
        {
            from: src + '/img',
            to: 'img',
            ignore: ['*.DS_Store'],
            cache: true
        }
    ]
}

