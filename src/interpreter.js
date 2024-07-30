import { readFileSync } from 'fs';
import { createInterface } from 'readline';
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
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Cuylang > '
    });

    console.log('Modo interactivo iniciado. Escribe "chau" para terminar.');

    let lines = [];
    rl.prompt();

    rl.on('line', (line) => {
        if (line.trim() === 'chau') {
            rl.close();
            return;
        }

        const code = translateCode(line)
        if (code) {
            try {
                let context = Object.entries(methods)
                    .map(([k, v]) => `const ${k} = ${v.toString()};`)
                    .join('\n') + '\n' + lines.join('\n') + '\n' + code;
                eval(context);
                lines.push(code);
            } catch (err) {
                console.error(errors.ERROR_EVALUATE + err.message);
            }
        }

        rl.prompt();
    }).on('close', () => {
        console.log('Modo interactivo terminado.');
        process.exit(0);
    });
}

function evaluateFile(filePath) {
    let content = readFileContent(filePath);
    if (content) {
        const code = translateCode(content)
        if (code) {
            try {
                let context = Object.entries(methods)
                    .map(([k, v]) => `const ${k} = ${v.toString()};`)
                    .join('\n') + '\n' + code;
                eval(context);
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
            console.log('Código traducido:\n' + code);
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
    } catch (err) {
        throw new Error(errors.ERROR_TRANSLATE + err.message);
    }

    return translated;
}