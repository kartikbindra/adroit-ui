import { writeFileSync } from 'fs';
import { resolve } from 'path';
import * as execa from 'execa';

const postinstall = async () => {
    try {
        await execa('npm', ['install', 'tailwindcss', 'postcss', 'autoprefixer']);
        await execa('npx', ['tailwindcss', 'init']);
        writeFileSync(
        resolve(process.cwd(), 'postcss.config.js'),
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