import { readFileSync } from 'fs';
import path from 'path';
import keywords from "./keywords.js"
import methods from "./methods.js"
import * as errors from "./errors.js";

export function execute(argv) {
    const filePath = process.argv[2];
    const action = process.argv[3];

    if (!filePath && !action) {
        startShellMode()
    } else if (filePath) {
        if (path.extname(filePath) !== '.cuy') {
            console.error(errors.ERROR_INVALID_FILE);
            process.exit(0);
        }

        if (!action) {
            evaluateFile(filePath)
        } else if (action === 'translate') {
            translateFile(filePath)
        } else {
            throw new Error(errors.ERROR_INVALID_ACTION);
        }
    }
}

function startShellMode() {
    console.log('modo consola');
}

function evaluateFile(filePath) {
    let content = readFileContent(filePath);
    if (content) {
        const code = translateCode(content)
        if (code) {
            try {
                eval(code);
            } catch (err) {
                throw new Error(errors.ERROR_EVALUATE + err.message);
            }
        }
    }
}

function translateFile(filePath) {
    let content = readFileContent(filePath);
    if (content) {
        const code = translateCode(content)
        if (code) {
            console.log('Código traducido:\n', code);
        }
    }
}

function readFileContent(filePath) {
    try {
        return readFileSync(filePath, 'utf8');
    } catch (err) {
        throw new Error(errors.ERROR_READ_FILE + err.message);
    }
}

function translateCode(content) {
    let translated = content;

    try {
        for (const [key, value] of Object.entries(keywords)) {
            const regex = new RegExp(`\\b${key}\\b`, 'g');
            translated = translated.replace(regex, value);
        }

        for (const [key, value] of Object.entries(methods)) {
            const regex = new RegExp(`\\b${key}\\(([^)]*)\\)`, 'g');
            translated = translated.replace(regex, `${value}($1)`);
        }
    } catch (err) {
        throw new Error(errors.ERROR_TRANSLATE + err.message);
    }

    return translated;
}