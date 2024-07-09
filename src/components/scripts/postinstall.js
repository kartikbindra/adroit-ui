// install tailwindcss, postcss and autofixer
// then, initiate tialwind.config.js and postcss.config.js inside the user's project
const fs = require('fs');
const path = require('path');
const execa = require('execa');

const postinstall = async () => {
    try {
        await execa('npm', ['install', 'tailwindcss', 'postcss', 'autoprefixer']);
        await execa('npx', ['tailwindcss', 'init']);
        fs.writeFileSync(
        path.resolve(process.cwd(), 'postcss.config.js'),
        `module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
    };`,
        );
    } catch (error) {
        console.error(error);
    }
    };