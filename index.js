import MiniCLexer from "./generated/MiniCLexer.js";
import MiniCParser from "./generated/MiniCParser.js";
import { CustomMiniCListener } from "./CustomMiniCListener.js";
import { CustomMiniCVisitor } from "./CustomMiniCVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;
    try {
        input = fs.readFileSync('correcto1.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new MiniCLexer(inputStream);
    console.log("Symbolic namesxdddd:", lexer.symbolicNames);
    let tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();

    //SE CREA LA TABLA DE LEXEMAS
    console.log("=== Tabla de lexemas ===");
    console.table(tokenStream.tokens.map(token => ({
        tipo: MiniCLexer.symbolicNames[token.type],
        texto: token.text,
        linea: token.line,
    })));

    let parser = new MiniCParser(tokenStream);
    let tree = parser.programa();

    if (parser._syntaxErrors > 0) return console.error("\n❌ Se encontraron errores de sintaxis.");
    
    //se visita el árbol sintáctico
    console.log("\n✅ Entrada válida.");
    console.log("\n=== Árbol sintáctico ===");
    console.log(tree.toStringTree(parser.ruleNames));

    
    const visitor = new CustomMiniCVisitor();
    visitor.visit(tree);

    //se traduce a JS
    const codigoJS = visitor.visit(tree);
    console.log("este",codigoJS);
        
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
