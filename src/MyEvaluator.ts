import antlr4 from 'antlr4';
import SimpleLangLexer from './antlr/grammar/SimpleLangLexer.js';
import SimpleLangParser from './antlr/grammar/SimpleLangParser.js';
import SimpleLangVisitor from './antlr/grammar/SimpleLangVisitor.js';
import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";

// extend the generated visitor to evaluate expressions
class EvalVisitor extends SimpleLangVisitor {
    visitProg(ctx: any): number {
        return this.visit(ctx.expression());
    }

    visitExpression(ctx: any): number {
        if (ctx.INT()) {
            return parseInt(ctx.INT().getText(), 10);
        } else if (ctx.getChildCount() === 3) {
            const left = this.visit(ctx.getChild(0));
            const op = ctx.getChild(1).getText();
            const right = this.visit(ctx.getChild(2));
            switch (op) {
                case '+': return left + right;
                case '-': return left - right;
                case '*': return left * right;
                case '/': return left / right;
            }
        }
        return 0;
    }
}

export class MyEvaluator extends BasicEvaluator {
    async evaluateChunk(chunk: string): Promise<void> {
        // set up antlr's pipeline
        const chars = new antlr4.InputStream(chunk);
        const lexer = new SimpleLangLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new SimpleLangParser(tokens);
        parser.buildParseTrees = true;
        const tree = parser.prog();

        // evaluate using our visitor
        const visitor = new EvalVisitor();
        const result = visitor.visit(tree);
        this.conductor.sendOutput(`result: ${result}`);
    }

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
    }
}